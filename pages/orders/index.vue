<template>
  <v-container>
    <pedidos-header title="Pedidos" link="orders/create" />
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
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
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
              <v-btn icon v-bind="attrs" v-on="on">
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
              <v-btn icon v-bind="attrs" v-on="on" :disabled="item.status != 'Preparado'">
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
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <div v-if="item.status == 'Aguardando'" class="chip blue ligthen-1">
            {{ item.status }}
          </div>
          <div v-if="item.status == 'Preparado'" class="chip yellow darken-3">
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
    <v-dialog v-model="editDialog" persistent min-width="500" width="700">
      <change-order-status-dialog
        :id="statusModalId"
        :status="statusModalValue"
      ></change-order-status-dialog>
    </v-dialog>
  </v-container>
</template>

<script>
import ViewOrderDialog from '~/components/Dialogs/Orders/ViewOrderDialog.vue'
import ChangeOrderStatusDialog from '~/components/Dialogs/Orders/ChangeOrderStatusDialog.vue'
import PedidosHeader from '~/components/Headers/PedidosHeader.vue';
export default {
  components: { ViewOrderDialog, ChangeOrderStatusDialog, PedidosHeader },
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
    headers: [
      {
        text: 'Fecha',
        value: 'createdOn',
        class: 'header-color',
      },
      {
        text: 'Fecha entrega',
        value: 'deliveryDate',
        class: 'header-color',
      },
      {
        text: 'Cliente',
        value: 'client',
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
    editOrder(item) {
      this.$router.push({
        path: '/orders/create',
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
    async getOrders() {
      this.loading = true
      this.$store.commit('setLoading')
      await this.$store.dispatch('getOrders', {
        page: this.page,
        itemsPerPage: this.itemsPerPage,
      })
      this.$store.commit('setLoading')
      this.loading = false
    },
    changeState(id, status) {
      this.statusModalValue = status
      this.statusModalId = id
      this.$store.commit('setEditDialog')
    },
  },
  async beforeMount() {
    this.getOrders()
  },
}
</script>

<style>
</style>