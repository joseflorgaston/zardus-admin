<template>
  <v-container>
    <pedidos-header title="Compras" link="buy_products/create" />
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
        <template v-slot:[`item.totalAmount`]="{ item }">
          <shared-money :amount="item.totalAmount || 0"></shared-money>
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
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon
                  color="primary"
                  title="Ver detalle de compra"
                  @click="viewOrder(item)"
                  >mdi-eye</v-icon
                >
              </v-btn>
            </template>
            <span>Ver detalle de compra</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon
                  color="primary"
                  title="Editar Compra"
                  @click="editOrder(item)"
                  >mdi-pencil</v-icon
                >
              </v-btn>
            </template>
            <span>Editar Compra</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="dialog" persistent min-width="500" width="700">
      <view-order-dialog :item="viewItem"></view-order-dialog>
    </v-dialog>
  </v-container>
</template>

<script>
import ViewOrderDialog from '~/components/Dialogs/BuyProducts/ViewBuyDetails.vue';
export default {
  components: { ViewOrderDialog },
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
        text: 'Fecha',
        value: 'createdOn',
        class: 'header-color',
      },
      {
        text: 'Proveedor',
        value: 'provider',
        class: 'header-color',
      },
      {
        text: 'Método de pago',
        value: 'paymentMethod',
        class: 'header-color',
      },
      {
        text: 'Monto',
        value: 'totalAmount',
        class: 'header-color',
      },
      {
        text: 'Acciones',
        value: 'actions',
        class: 'header-color',
      },
    ],
    loading: false,
    page: 1,
    itemsPerPage: 10,
  }),
  methods: {
    viewOrder(item) {
      console.log('aaa')
      this.viewItem = item
      this.$store.commit('setDialog')
    },
    editOrder(item) {
      console.log('aaa')
      this.$router.push({
        path: '/buy_products/create',
        query: { _id: `${item._id}` },
      })
    },
    async nextPage(value) {
      this.page = value
      await this.getProducts()
    },
    async otherItemCount(value) {
      this.itemsPerPage = value
      await this.getProducts()
    },
    async getSupplyOrders() {
      this.loading = true
      this.$store.commit('setLoading')
      await this.$store.dispatch('getSupplyOrders', {
        page: this.page,
        itemsPerPage: this.itemsPerPage,
      })
      this.$store.commit('setLoading')
      this.loading = false
    },
  },
  async beforeMount() {
    this.getSupplyOrders()
  },
}
</script>

<style>
</style>