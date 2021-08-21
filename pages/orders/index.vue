<template>
  <v-container>
    <pedidos-header title="Pedidos" link="orders/create" />
    <v-card>
      <v-data-table :items="items" :headers="headers">
          <template v-slot:[`item.totalAmount`]="{ item }">
          <shared-money :amount="item.totalAmount || 0"></shared-money>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn icon >
            <v-icon color="primary" title="Detalle Pedido" @click="viewOrder(item)">mdi-eye</v-icon>
          </v-btn>
          <v-btn icon >
            <v-icon color="error" title="Editar Pedido" @click="editOrder(item)">mdi-pencil</v-icon>
          </v-btn>
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <div v-if="item.status == 'Aguardando'" class="chip blue ligthen-1">
              {{item.status}}
          </div>
          <div v-if="item.status == 'Entregado'" class="chip success">
              {{item.status}}
          </div>
          <div v-if="item.status == 'Cancelado'" class="chip error">
              {{item.status}}
          </div>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
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
        value: 'clientName',
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
    items: [
      {
        createdOn: '20/08/2021',
        deliveryDate: '01/09/2021',
        clientName: 'Jorge Aurelio',
        deliveryAddress: 'La paz esq/ tacuary',
        paymentMethod: 'Contado',
        status: 'Aguardando',
        totalAmount: 180000,
      },
      {
        createdOn: '20/08/2021',
        deliveryDate: '01/09/2021',
        clientName: 'Jorge Aurelio',
        deliveryAddress: 'La paz esq/ tacuary',
        paymentMethod: 'Contado',
        status: 'Aguardando',
        totalAmount: 180000,
      },
      {
        createdOn: '20/08/2021',
        deliveryDate: '01/09/2021',
        clientName: 'Jorge Aurelio',
        deliveryAddress: 'La paz esq/ tacuary',
        paymentMethod: 'Contado',
        status: 'Entregado',
        totalAmount: 180000,
      },
      {
        createdOn: '20/08/2021',
        deliveryDate: '01/09/2021',
        clientName: 'Jorge Aurelio',
        deliveryAddress: 'La paz esq/ tacuary',
        paymentMethod: 'Contado',
        status: 'Cancelado',
        totalAmount: 180000,
      },
    ],
    page: 1,
    itemsPerPage: 10,
  }),
  methods: {
      viewOrder(item) {
          console.log(item);
      },
      editOrder(item) {
        console.log(item);
      },
      async getOrders() {
          this.$store.commit("setLoading");
          await this.$store.dispatch("getOrders", {page: this.page, itemsPerPage: this.itemsPerPage});
          this.$store.commit("setLoading");
      }
  },
  async beforeMount() {
      this.getOrders();
  }
}
</script>

<style>
</style>