<template>
  <v-container>
    <h2>Historial de pedidos</h2>
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
            :date="item.deliveryDate || ''"
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
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <div v-if="item.status == 'Aguardando'" class="chip blue ligthen-1">
            {{ item.status }}
          </div>
          <div v-if="item.status == 'Entregado'" class="chip success">
            {{ item.status }}
          </div>
          <div v-if="item.status == 'Cancelado'" class="chip error">
            {{ item.status }}
          </div>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="dialog" persistent min-width="500" width="700">
      <view-order-dialog :item="viewItem"></view-order-dialog>
    </v-dialog>
  </v-container>
</template>

<script>
import ViewOrderDialog from '~/components/Dialogs/Orders/ViewOrderDialog.vue'
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
    count() {
      return this.$store.state.count
    },
  },
  data: () => ({
    disabledSwitch: true,
    loading: true,
    headers: [
      {
        text: 'Fecha de pedido',
        value: 'createdOn',
        class: 'header-color',
      },
      {
        text: 'Fecha de entrega',
        value: 'deliveryDate',
        class: 'header-color',
      },
      {
        text: 'Cliente',
        value: 'client',
        class: 'header-color',
      },
      {
        text: 'Metodos de pago',
        value: 'paymentMethod',
        class: 'header-color',
      },
      {
        text: 'Monto Total',
        value: 'totalAmount',
        class: 'header-color',
      },
      {
        text: 'Estado',
        value: 'status',
        class: 'header-color',
      },
      {
        text: 'Acciones',
        value: 'actions',
        class: 'header-color',
      },
    ],
    page: 1,
    viewItem: {},
    itemsPerPage: 10,
  }),
  methods: {
    viewOrder(item) {
      this.viewItem = item
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
  },
  async beforeMount() {
    this.getOrders()
  },
}
</script>

<style>
</style>