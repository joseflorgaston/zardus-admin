<template>
  <v-container>
    <pedidos-header
      title="Pedidos"
      link="orders/create"
      :searchUrl="searchUrl"
    />
    <v-card>
      <v-data-table
        :items="items"
        :headers="headers"
        :server-items-length="count"
        :page="page"
        :items-per-page="itemsPerPage"
        @update:page="nextPage"
        @update:items-per-page="otherItemCount"
        :loading="loading"
        :footer-props="{
          itemsPerPageOptions: [5, 10, 15],
        }"
      >
        <template v-slot:[`item.isSelected`]="{ item }">
          <v-checkbox
            :value="isChecked(item)"
            @change="setSelected(item, $event)"
          ></v-checkbox>
        </template>
        <template v-slot:[`item.totalPayed`]="{ item }">
          <shared-money :amount="item.totalPayed || 0"></shared-money>
        </template>
        <template v-slot:[`item.totalAmount`]="{ item }">
          <shared-money :amount="item.totalAmount || 0"></shared-money>
        </template>
        <template v-slot:[`item.createdOn`]="{ item }">
          <shared-formatted-date
            :date="item.createdOn || ''"
            :hasHour="true"
          ></shared-formatted-date>
        </template>
        <template v-slot:[`item.deliveryDate`]="{ item }">
          <shared-formatted-date
            :class="getDeliveryDateColor(item.deliveryDate)"
            :date="universalDate(item.deliveryDate) || ''"
          ></shared-formatted-date>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon
                  color="primary"
                  title="Detalle Pedido"
                  @click="viewOrder(item)"
                  >mdi-eye</v-icon
                >
              </v-btn>
            </template>
            <span>Ver Pedido</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" :disabled="item.status == 'Entregado'" v-on="on">
                <v-icon
                  color="primary"
                  title="Editar Pedido"
                  @click="editOrder(item)"
                  >mdi-pencil</v-icon
                >
              </v-btn>
            </template>
            <span>Editar Pedido</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                v-show="item.status != 'Entregado'"
              >
                <v-icon
                  color="error"
                  title="Cancelar Pedido"
                  @click="changeState(item._id, 'Cancelado')"
                  >mdi-close</v-icon
                >
              </v-btn>
            </template>
            <span>Cancelar Pedido</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                :disabled="item.status != 'Preparado'"
                v-show="item.status != 'Entregado'"
              >
                <v-icon
                  color="success"
                  title="Entregar Pedido"
                  @click="changeState(item._id, 'Entregado')"
                  >mdi-check</v-icon
                >
              </v-btn>
            </template>
            <span>Cambiar estado a Entregado</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                @click="addPayment(item, 'Pagado')"
                v-show="item.status == 'Entregado'"
              >
                <v-icon
                  :disabled="item.status != 'Entregado'"
                  color="primary"
                  title="Detalle Pedido"
                  >mdi-cash</v-icon
                >
              </v-btn>
            </template>
            <span v-if="item.paymentMethod == 'Credito'">Agregar Pago</span>
            <span v-else>Cambiar estado a pagado</span>
          </v-tooltip>
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <div v-show="item.status == 'Aguardando'" class="chip blue ligthen-1">
            {{ item.status }}
          </div>
          <div v-show="item.status == 'Preparado'" class="chip yellow darken-3">
            {{ item.status }}
          </div>
          <div v-show="item.status == 'Entregado'" class="chip success">
            {{ item.status }}
          </div>
          <div v-show="item.status == 'Cancelado'" class="chip error">
            {{ item.status }}
          </div>
        </template>
      </v-data-table>
    </v-card>
    <div class="d-flex justify-end ma-5">
      <v-btn
        color="green"
        class="white--text"
        :disabled="selectedItems.length == 0"
      >
        <json-excel
          :data="selectedItems"
          :field="fields"
          :class="selectedItems.length == 0 ? '' : 'btn green white--text'"
        >
          Exportar
          <v-icon class="pl-1">mdi-download</v-icon>
        </json-excel>
      </v-btn>
    </div>
    <v-dialog
      v-model="dialog"
      persistent
      min-width="500"
      width="700"
      max-width="100%"
    >
      <view-order-dialog
        :item="viewItem"
        :payments="payments"
      ></view-order-dialog>
    </v-dialog>
    <v-dialog
      v-model="editDialog"
      persistent
      min-width="500"
      width="700"
      max-width="100%"
    >
      <change-order-status-dialog
        :id="statusModalId"
        :status="statusModalValue"
      ></change-order-status-dialog>
    </v-dialog>
    <v-dialog
      v-model="paymentDialog"
      persistent
      min-width="500"
      width="700"
      max-width="100%"
    >
      <add-payment-dialog
        :item="paymentItem"
        v-on:closeDialog="openPaymentDialog"
      ></add-payment-dialog>
    </v-dialog>
  </v-container>
</template>

<script>
import JsonExcel from 'vue-json-excel'
import ViewOrderDialog from '~/components/Dialogs/Orders/ViewOrderDialog.vue'
import ChangeOrderStatusDialog from '~/components/Dialogs/Orders/ChangeOrderStatusDialog.vue'
import PedidosHeader from '~/components/Headers/PedidosHeader.vue'
import AddPaymentDialog from '~/components/Dialogs/Orders/AddPaymentDialog.vue'
import moment from 'moment'
export default {
  components: {
    ViewOrderDialog,
    ChangeOrderStatusDialog,
    PedidosHeader,
    JsonExcel,
    AddPaymentDialog,
  },
  computed: {
    items: {
      get() {
        return this.$store.state.items
      },
      set(values) {
        this.$store.commit('setItems', values)
      },
    },
    dialog() {
      return this.$store.state.dialog
    },
    editDialog: {
      get() {
        return this.$store.state.editDialog
      },
      set() {
        this.$store.commit('setEditDialog')
      },
    },
    count() {
      return this.$store.state.count
    },
  },
  data: () => ({
    disabledSwitch: true,
    loading: true,
    statusModalValue: '',
    statusModalId: '',
    paymentDialog: false,
    paymentItem: {},
    headers: [
      {
        text: 'Exp',
        value: 'isSelected',
        class: 'header-color white--text',
      },
      {
        text: 'Fecha Pedido',
        value: 'createdOn',
        class: 'header-color white--text',
      },
      {
        text: 'Fecha entrega',
        value: 'deliveryDate',
        class: 'header-color white--text',
      },
      {
        text: 'Cliente',
        value: 'customer',
        class: 'header-color white--text',
      },
      {
        text: 'Método de pago',
        value: 'paymentMethod',
        class: 'header-color white--text',
      },
      {
        text: 'Monto',
        value: 'totalAmount',
        class: 'header-color white--text',
      },
      {
        text: 'Monto Pagado',
        value: 'totalPayed',
        class: 'header-color white--text',
      },
      {
        text: 'Comprobante',
        value: 'invoiceNumber',
        class: 'header-color white--text',
      },
      {
        text: 'Estado',
        value: 'status',
        class: 'header-color white--text',
      },
      {
        text: 'Acciones',
        value: 'actions',
        class: 'header-color white--text',
      },
    ],
    fields: {
      Fecha: 'Fecha',
      'Monto Total': 'Monto Total',
      Proveedor: 'Proveedor',
      'Metodo de pago': 'Metodo de pago',
      'Monto Pagado': 'Monto Pagado',
      Encargado: 'Encargado',
    },
    searchUrl: '/api/orders/',
    payments: [],
    selectedItems: [],
    page: 1,
    viewItem: {},
    itemsPerPage: 10,
  }),

  async beforeMount() {
    this.$store.commit('clearFilters')
    this.getOrders()
  },

  methods: {
    async viewOrder(item) {
      this.viewItem = item
      this.$store.commit('setLoading')
      this.payments = await this.$axios.$get(`api/order/payments/${item._id}`)
      this.$store.commit('setLoading')
      this.$store.commit('setDialog')
    },
    universalDate(deliveryDate) {
      if (!deliveryDate) {
        return null
      }
      return deliveryDate.substring(0, deliveryDate.length - 2)
    },
    addPayment(item) {
      if (item.paymentMethod == 'Contado')
        return this.changeState(item._id, 'Pagado')

      this.paymentItem = item
      this.openPaymentDialog()
    },
    openPaymentDialog() {
      this.paymentDialog = !this.paymentDialog
    },
    editOrder(item) {
      this.$router.push({
        path: '/orders/create',
        query: { _id: `${item._id}` },
      })
    },
    async nextPage(value) {
      this.page = value
      await this.getOrders()
    },
    async otherItemCount(value) {
      this.itemsPerPage = value
      await this.getOrders()
    },
    async getOrders() {
      this.loading = true
      this.$store.commit('setLoading')
      await this.$store.dispatch('sharedSearch', {
        pagination: {
          page: this.page,
          itemsPerPage: this.itemsPerPage,
        },
        searchUrl: this.searchUrl,
        searchText: this.$store.state.searchText ?? '',
        dates: this.$store.state.filterDates ?? [],
      })
      this.$store.commit('setLoading')
      this.loading = false
    },
    changeState(id, status) {
      this.statusModalValue = status
      this.statusModalId = id
      this.$store.commit('setEditDialog')
    },
    getDeliveryDateColor(deliveryDate) {
      var today = new Date()
      var date = new Date(deliveryDate)
      if (today > date) {
        return 'red--text font-weight-bold'
      }
      return 'black--text'
    },
    setSelected(item, isChecked) {
      if (isChecked) return this.selectedItems.push(this.formatExcel(item))

      const index = this.selectedItems.indexOf(this.formatExcel(item))
      return this.selectedItems.splice(index, 1)
    },

    formatExcel(item) {
      const formattedItem = {
        _id: item._id,
        'Fecha de entrega': this.formatDate(item.deliveryDate),
        'Monto Total': item.totalAmount,
        Cliente: item.customer,
        'Metodo de pago': item.paymentMethod,
        'Monto Pagado': item.totalPayed,
        Encargado: item.userName,
        Estado: item.status,
      }
      return formattedItem
    },

    isChecked(item) {
      if (this.selectedItems.filter((x) => x._id == item._id).length > 0)
        return true

      return false
    },

    formatDate(date) {
      return moment(date).locale('es_py').format('DD/MM/yyyy')
    },
  },
}
</script>

<style>
</style>