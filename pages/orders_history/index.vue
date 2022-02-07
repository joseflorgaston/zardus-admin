<template>
  <v-container>
    <orders-history-header title="Pedidos"> </orders-history-header>
    <v-card class="mt-5">
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
        <template v-slot:[`item.totalAmount`]="{ item }">
          <shared-money :amount="item.totalAmount || 0"></shared-money>
        </template>
        <template v-slot:[`item.totalPayed`]="{ item }">
          <shared-money :amount="item.totalPayed || 0"></shared-money>
        </template>
        <template v-slot:[`item.createdOn`]="{ item }">
          <shared-formatted-date
            :date="item.createdOn || ''"
            :hasHour="true"
          ></shared-formatted-date>
        </template>
        <template v-slot:[`item.deliveryDate`]="{ item }">
          <shared-formatted-date
            :date="item.deliveryDate || ''"
          ></shared-formatted-date>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" @click="viewOrder(item)">
                <v-icon color="primary" title="Detalle Pedido">mdi-eye</v-icon>
              </v-btn>
            </template>
            <span>Ver Pedido</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                @click="addPayment(item, 'Pagado')"
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
          <div v-if="item.status == 'Pagado'" class="chip success">
            {{ item.status }}
          </div>
          <div v-if="item.status == 'Entregado'" class="chip warning">
            {{ item.status }}
          </div>
          <div v-if="item.status == 'Cancelado'" class="chip error">
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
    <v-dialog v-model="dialog" persistent min-width="500" width="700">
      <view-order-dialog
        :item="viewItem"
        :payments="payments"
      ></view-order-dialog>
    </v-dialog>
    <v-dialog v-model="editDialog" persistent min-width="500" width="700">
      <change-order-status-dialog
        :id="statusModalId"
        :status="'Pagado'"
      ></change-order-status-dialog>
    </v-dialog>
    <v-dialog v-model="paymentDialog" persistent min-width="500" width="700">
      <add-payment-dialog
        :item="viewItem"
        v-on:closeDialog="openPaymentDialog"
      ></add-payment-dialog>
    </v-dialog>
  </v-container>
</template>

<script>
import ViewOrderDialog from '~/components/Dialogs/Orders/ViewOrderDialog.vue'
import AddPaymentDialog from '~/components/Dialogs/Orders/AddPaymentDialog.vue'
import ChangeOrderStatusDialog from '~/components/Dialogs/Orders/ChangeOrderStatusDialog.vue'
import OrdersHistoryHeader from '~/components/Headers/OrdersHistoryheader.vue'
import moment from 'moment'
import JsonExcel from 'vue-json-excel'
export default {
  components: {
    ViewOrderDialog,
    ChangeOrderStatusDialog,
    OrdersHistoryHeader,
    AddPaymentDialog,
    JsonExcel,
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
    count() {
      return this.$store.state.count
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
    headers: [
      {
        text: 'Exp',
        value: 'isSelected',
        class: 'header-color white--text',
      },
      {
        text: 'Fecha de pedido',
        value: 'createdOn',
        class: 'header-color white--text',
      },
      {
        text: 'Fecha de entrega',
        value: 'deliveryDate',
        class: 'header-color white--text',
      },
      {
        text: 'Cliente',
        value: 'customer',
        class: 'header-color white--text',
      },
      {
        text: 'Metodos de pago',
        value: 'paymentMethod',
        class: 'header-color white--text',
      },
      {
        text: 'Monto Total',
        value: 'totalAmount',
        class: 'header-color white--text',
      },
      {
        text: 'Monto Pagado',
        value: 'totalPayed',
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
    payments: [],
    selectedItems: [],
    statusModalValue: '',
    statusModalId: '',
    page: 1,
    viewItem: {},
    itemsPerPage: 10,
    paymentDialog: false,
  }),
  methods: {
    async viewOrder(item) {
      this.viewItem = item
      this.$store.commit('setLoading')
      this.payments = await this.$axios.$get(`api/order/payments/${item._id}`)
      this.$store.commit('setLoading')
      this.$store.commit('setDialog')
    },
    async nextPage(value) {
      this.page = value
      await this.getOrders()
    },
    async otherItemCount(value) {
      this.itemsPerPage = value
      await this.getOrders()
    },
    editOrder(item) {
      console.log(item)
    },
    async getOrders() {
      this.loading = true
      this.$store.commit('setLoading')
      await this.$store.dispatch('getHistoryOrders', {
        page: this.page,
        itemsPerPage: this.itemsPerPage,
      })
      this.$store.commit('setLoading')
      this.loading = false
    },
    changeOrderStatus(id, status) {
      console.log(id)
      this.statusModalValue = status
      this.statusModalId = id
      this.$store.commit('setEditDialog')
    },

    addPayment(item) {
      if (item.paymentMethod == 'Contado')
        return this.changeOrderStatus(item._id, 'Pagado')

      this.viewItem = item
      this.openPaymentDialog()
    },
    openPaymentDialog() {
      this.paymentDialog = !this.paymentDialog
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
  async beforeMount() {
    this.getOrders()
  },
}
</script>

<style>
</style>