<template>
  <v-container>
    <pedidos-header
      title="Compras"
      link="buy_products/create"
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
        <template v-slot:[`item.actions`]="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" @click="viewOrder(item)">
                <v-icon color="primary" title="Ver detalle de compra"
                  >mdi-eye</v-icon
                >
              </v-btn>
            </template>
            <span>Ver detalle de compra</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" @click="editOrder(item)">
                <v-icon color="primary" title="Editar Compra"
                  >mdi-pencil</v-icon
                >
              </v-btn>
            </template>
            <span>Editar Compra</span>
          </v-tooltip>
          <v-tooltip bottom v-if="item.totalPayed != item.totalAmount">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                @click="openPaymentDialog(item)"
              >
                <v-icon color="primary" title="Editar Compra">mdi-cash</v-icon>
              </v-btn>
            </template>
            <span>Agregar Pago</span>
          </v-tooltip>
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
    <v-dialog v-model="paymentDialog" persistent min-width="500" width="700">
      <payment-dialog
        :item="viewItem"
        v-on:closeDialog="openPaymentDialog"
      ></payment-dialog>
    </v-dialog>
  </v-container>
</template>

<script>
import JsonExcel from 'vue-json-excel'
import PaymentDialog from '~/components/Dialogs/BuyProducts/PaymentDialog.vue'
import ViewOrderDialog from '~/components/Dialogs/BuyProducts/ViewBuyDetails.vue'
import PedidosHeader from '~/components/Headers/PedidosHeader.vue'
import moment from 'moment'
export default {
  components: { ViewOrderDialog, PedidosHeader, PaymentDialog, JsonExcel },
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
    headers: [
      {
        text: 'Exp',
        value: 'isSelected',
        class: 'header-color white--text',
      },
      {
        text: 'Fecha',
        value: 'createdOn',
        class: 'header-color white--text',
      },
      {
        text: 'Proveedor',
        value: 'provider',
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
        text: 'Monto pagado',
        value: 'totalPayed',
        class: 'header-color white--text',
      },
      {
        text: 'Acciones',
        value: 'actions',
        class: 'header-color white--text',
      },
    ],
    searchUrl: '/api/supplyOrders/',
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
    viewItem: {},
    loading: false,
    page: 1,
    itemsPerPage: 10,
    paymentDialog: false,
  }),
  methods: {
    async viewOrder(item) {
      this.viewItem = item
      this.$store.commit('setLoading')
      this.payments = await this.$axios.$get(
        `api/supplyOrder/payments/${item._id}`
      )
      this.$store.commit('setLoading')
      this.$store.commit('setDialog')
    },

    openPaymentDialog(item) {
      this.viewItem = item
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
        Fecha: this.formatDate(item.createdOn),
        'Monto Total': item.totalAmount,
        Proveedor: item.provider,
        'Metodo de pago': item.paymentMethod,
        'Monto Pagado': item.totalPayed,
        Encargado: item.userName,
      }
      return formattedItem
    },

    editOrder(item) {
      this.$router.push({
        path: '/buy_products/create',
        query: { _id: `${item._id}` },
      })
    },

    formatDate(date) {
      return moment(date).locale('es_py').format('DD/MM/yyyy')
    },

    isChecked(item) {
      if (this.selectedItems.filter((x) => x._id == item._id).length > 0)
        return true

      return false
    },

    async nextPage(value) {
      this.page = value
      await this.getSupplyOrders()
    },

    async otherItemCount(value) {
      this.itemsPerPage = value
      await this.getSupplyOrders()
    },

    async getSupplyOrders() {
      this.loading = true
      this.$store.commit('setLoading')
      await this.$store.dispatch('sharedSearch', {
        pagination: {
          page: this.page,
          itemsPerPage: this.itemsPerPage,
        },
        searchUrl: this.searchUrl,
        searchText: this.$store.state.searchText,
        dates: this.$store.state.filterDates ?? [],
      })
      this.$store.commit('setLoading')
      this.loading = false
    },
  },
  async beforeMount() {
    this.$store.commit('clearFilters')
    this.getSupplyOrders()
  },
}
</script>