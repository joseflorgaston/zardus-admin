<template>
  <v-container>
    <pedidos-header title="Pedidos" link="orders/create" />
    <v-card>
      <v-data-table :items="items" :headers="headers">
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
                  :disabled="item.status != 'Aguardando'"
                  @click="editOrder(item)"
                  >mdi-pencil</v-icon
                >
              </v-btn>
            </template>
            <span>Editar Pedido</span>
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
        <template v-slot:[`item.isPrepared`]="{ item }">
          <v-switch
            :input-value="item.isPrepared"
            @change="setIsPrepared(item, $event)"
            v-if="item.status == 'Aguardando'"
            title="Indica si el pedido esta preparado para la entrega"
          ></v-switch>
          <v-switch
            v-model="disabledSwitch"
            disabled
            v-else
            title="Indica si el pedido esta preparado para la entrega"
          ></v-switch>
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
        text: 'Preparado',
        value: 'isPrepared',
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
      this.$store.commit("setDialog");
    },
    async setIsPrepared({ _id }, value) {
      this.$store.commit('setLoading')
      console.log(value)
      await this.$axios.patch(`/api/order/update/isprepared/${_id}`, { value })
      this.$store.commit('setSuccess', 'El pedido esta preparado')
      this.$store.commit('setLoading')
    },
    editOrder(item) {
      console.log(item)
    },
    async getOrders() {
      this.$store.commit('setLoading')
      await this.$store.dispatch('getOrders', {
        page: this.page,
        itemsPerPage: this.itemsPerPage,
      })
      this.$store.commit('setLoading')
    },
  },
  async beforeMount() {
    this.getOrders()
  },
}
</script>

<style>
</style>