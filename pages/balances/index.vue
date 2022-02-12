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
        <v-data-table
          :headers="profitsHeader"
          :items="profitsData"
          :server-items-length="profitsCount"
          :page="profitPagination.page"
          :items-per-page="profitPagination.itemsPerPage"
          @update:page="nextProfitsPage"
          @update:items-per-page="changeProfitsCount"
          :loading="profitsLoading"
          loading-text="Cargando"
        >
          <template v-slot:[`item.totalAmount`]="{ item }">
            <shared-money
              :amount="item.totalAmount || 0"
              class="success--text font-weight-bold"
            ></shared-money>
          </template>
          <template v-slot:[`item.paymentDate`]="{ item }">
            <shared-formatted-date
              :date="item.paymentDate || ''"
              :hasHour="true"
            ></shared-formatted-date>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  @click="openViewProfitsDetails(item)"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon color="primary" title="Ver detalle de compra"
                    >mdi-eye</v-icon
                  >
                </v-btn>
              </template>
              <span>Ver detalles</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-col>
      <v-col cols="12" md="6">
        <center><h3>Gastos</h3></center>
        <v-data-table
          :headers="expensesHeader"
          :items="expensesData"
          :server-items-length="expensesCount"
          :page="expensesPagination.page"
          :items-per-page="expensesPagination.itemsPerPage"
          @update:page="nextExpensesPage"
          @update:items-per-page="changeExpensesCount"
          :loading="expensesLoading"
          loading-text="Cargando"
        >
          <template v-slot:[`item.totalAmount`]="{ item }">
            <shared-money
              :amount="-item.totalAmount || 0"
              class="red--text font-weight-bold"
            ></shared-money>
          </template>
          <template v-slot:[`item.paymentDate`]="{ item }">
            <shared-formatted-date
              :date="item.paymentDate || ''"
              :hasHour="true"
            ></shared-formatted-date>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  @click="openViewExpensesDetails(item)"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon color="primary" title="Ver detalle de compra"
                    >mdi-eye</v-icon
                  >
                </v-btn>
              </template>
              <span>Ver detalles</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent min-width="500" width="700">
      <view-order-dialog
        :item="viewItem"
        :payments="payments"
      ></view-order-dialog>
    </v-dialog>
  </div>
</template>

<script>
import BalancesPieChart from '~/components/Balances/BalancesPieChart.vue'
import ViewOrderDialog from '~/components/Dialogs/BuyProducts/ViewBuyDetails.vue'
export default {
  components: { BalancesPieChart, ViewOrderDialog },
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
    dialog() {
      return this.$store.state.dialog
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
    async nextProfitsPage(value) {
      this.profitsLoading = true
      this.profitPagination.page = value
      await this.getProfits()
      this.profitsLoading = false
    },
    async changeProfitsCount(value) {
      this.profitsLoading = true
      this.profitPagination.itemsPerPage = value
      await this.getProfits()
      this.profitsLoading = false
    },
    async nextExpensesPage(value) {
      this.expensesLoading = true
      this.expensesPagination.page = value
      await this.getExpenses()
      this.expensesLoading = false
    },
    async changeExpensesCount(value) {
      this.expensesLoading = true
      this.expensesPagination.itemsPerPage = value
      await this.getExpenses()
      this.expensesLoading = false
    },
    async openViewProfitsDetails(item) {
      this.$store.commit('setLoading')
      this.viewItem = await this.$axios.$get('/api/order/' + item.orderId)
      this.payments = await this.$axios.$get(
        `api/order/payments/${item.orderId}`
      )
      this.$store.commit('setDialog')
      this.$store.commit('setLoading')
    },

    async openViewExpensesDetails(item) {
      this.$store.commit('setLoading')
      this.$store.commit('setLoading')
    },
  },
  data: () => ({
    loading: false,
    profitsLoading: false,
    viewItem: {},
    payments: [],
    expensesLoading: false,
    viewProfitsDetails: false,
    viewExpensesDetails: false,
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