<template>
  <div>
    <shared-header title="Balances"></shared-header>
    <v-row>
      <v-col cols="6">
        <shared-loading-card v-show="loading" />
        <balances-statistics-card
          v-show="!loading"
          title="TOTAL TRANSACCIONES"
          chartId="chart1"
          :loading="loading"
          :chartValues="transactionsQuantity"
          :label="labels"
          :colors="colors"
        />
      </v-col>
      <v-col cols="6">
        <shared-loading-card v-show="loading" />
      </v-col>
      <v-col cols="12" md="6">
        <center><h3>Ganancias</h3></center>
        <v-data-table :headers="expensesHeader" :items="expensesData">
        </v-data-table>
      </v-col>
      <v-col cols="12" md="6">
        <center><h3>Gastos</h3></center>
        <v-data-table :headers="profitsHeader" :items="profitsData">
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BalancesPieChart from '~/components/Balances/BalancesPieChart.vue'
export default {
  components: { BalancesPieChart },
  computed: {
    profitsData: {
      get() {
        return this.$store.state.items
      },
      set(values) {
        this.$store.commit('setItems', values)
      },
    },
    profitsCount() {
      return this.$store.state.count
    },
    expensesData: {
      get() {
        return this.$store.state.items2
      },
      set(values) {
        this.$store.commit('setItems', values)
      },
    },
    expensesCount() {
      return this.$store.state.count2
    },
  },
  async beforeMount() {
    this.loading = true
    this.$store.commit('setLoading')
    await this.getProfits()
    await this.getExpenses()
    this.$store.commit('setLoading')
    this.loading = false
  },
  methods: {
    async getProfits() {
      await this.$store.dispatch('getProfits', this.profitPagination)
    },
    async getExpenses() {
      await this.$store.dispatch('getExpenses', this.expensesPagination)
    },
  },
  data: () => ({
    loading: false,
    labels: ['Ganancias', 'Gastos'],
    colors: ['#00E676', '#DD2C00'],
    transactionsQuantity: {
      headers: {
        monthly: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
        daily: ['Hoy'],
        weekly: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
      },
      values: [
        {
          monthly: ['4760000', '3890000', '8540000', '12221000'],
          daily: ['274000'],
          weekly: [
            '440000',
            '165000',
            '252000',
            '460000',
            '276250',
            '301700',
            '274000',
          ],
        },
        {
          monthly: ['1142000', '1860000', '758250', '7967000'],
          daily: ['128000'],
          weekly: [
            '140000',
            '132000',
            '336000',
            '68000',
            '14450',
            '32740',
            '128000',
          ],
        },
      ],
    },
    activeBusinesses: [5, 8],
    profitPagination: {
      page: 1,
      itemsPerPage: 10,
    },
    expensesPagination: {
      page: 1,
      itemsPerPage: 10,
    },
    profitsHeader: [
      {
        text: 'Fecha de Pago',
        value: 'paymentDate',
        class: 'header-color white--text',
      },
      {
        text: 'Descripcion',
        value: 'description',
        class: 'header-color white--text',
      },
      {
        text: 'Monto Total',
        value: 'totalAmount',
        class: 'header-color white--text',
      },
      {
        text: 'Acciones',
        value: 'actions',
        class: 'header-color white--text',
      },
    ],
    expensesHeader: [
      {
        text: 'Fecha de Pago',
        value: 'paymentDate',
        class: 'header-color white--text',
      },
      {
        text: 'Descripcion',
        value: 'description',
        class: 'header-color white--text',
      },
      {
        text: 'Monto Total',
        value: 'totalAmount',
        class: 'header-color white--text',
      },
      {
        text: 'Acciones',
        value: 'actions',
        class: 'header-color white--text',
      },
    ],
  }),
}
</script>

<style>
</style>