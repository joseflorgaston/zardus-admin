<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6">
        <balances-statistics-card />
      </v-col>
      <v-col cols="6"> </v-col>
      <v-col cols="12" md="6">
        <center>
          <h3>Ganancias</h3>
        </center>
        <v-data-table :headers="profitsHeader" :items="profitsData" :server-items-length="profitsCount"
          :page="profitPagination.page" :items-per-page="profitPagination.itemsPerPage" @update:page="nextProfitsPage"
          @update:items-per-page="changeProfitsCount" :loading="profitsLoading" loading-text="Cargando">
          <template v-slot:[`item.totalAmount`]="{ item }">
            <shared-money :amount="item.totalAmount || 0" class="success--text font-weight-bold"></shared-money>
          </template>
          <template v-slot:[`item.paymentDate`]="{ item }">
            <shared-formatted-date :date="item.paymentDate || ''" :hasHour="true"></shared-formatted-date>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon @click="openViewProfitsDetails(item)" v-bind="attrs" v-on="on">
                  <v-icon color="primary" title="Ver detalle de compra">mdi-eye</v-icon>
                </v-btn>
              </template>
              <span>Ver detalles</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-col>
      <v-col cols="12" md="6">
        <center>
          <h3>Gastos</h3>
        </center>
        <v-data-table :headers="expensesHeader" :items="expensesData" :server-items-length="expensesCount"
          :page="expensesPagination.page" :items-per-page="expensesPagination.itemsPerPage"
          @update:page="nextExpensesPage" @update:items-per-page="changeExpensesCount" :loading="expensesLoading"
          loading-text="Cargando">
          <template v-slot:[`item.totalAmount`]="{ item }">
            <shared-money :amount="-item.totalAmount || 0" class="red--text font-weight-bold"></shared-money>
          </template>
          <template v-slot:[`item.paymentDate`]="{ item }">
            <shared-formatted-date :date="item.paymentDate || ''" :hasHour="true"></shared-formatted-date>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon @click="openViewExpensesDialog(item)" :disabled="item.type == 'Expense'" v-bind="attrs"
                  v-on="on">
                  <v-icon color="primary" title="Ver detalle de compra">mdi-eye</v-icon>
                </v-btn>
              </template>
              <span>Ver detalles</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent min-width="500" width="700">
      <view-order-dialog :item="profitsDetails" :payments="profitPayments"></view-order-dialog>
    </v-dialog>
    <v-dialog v-model="expensesDialog" persistent min-width="500" width="700">
      <view-buy-details :item="expensesDetails" :payments="expensesPayments" :isFromBalance="true"
        v-on:expensesDialog="closeExpensesDialog()"></view-buy-details>
    </v-dialog>
  </div>
</template>

<script>
import BalancesPieChart from '~/components/Balances/BalancesPieChart.vue'
import ViewOrderDialog from '~/components/Dialogs/BuyProducts/ViewBuyDetails.vue'
import ViewBuyDetails from '~/components/Dialogs/BuyProducts/ViewBuyDetails.vue'

export default {
  components: { BalancesPieChart, ViewOrderDialog, ViewBuyDetails },
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
  data: () => ({
    loading: false,
    profitsLoading: false,
    expensesLoading: false,
    profitPayments: [],
    profitsDetails: {},
    profitsDialog: false,
    expensesPayments: [],
    expensesDetails: {},
    expensesDialog: false,
    expenseDetailDialog: false,
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
      try {
        this.$store.commit('setLoading')
        this.profitsDetails = await this.$axios.$get(
          '/api/order/' + item.orderId
        )
        this.profitPayments = await this.$axios.$get(
          `api/order/payments/${item.orderId}`
        )
        this.$store.commit('setDialog')
      } catch (error) {
        this.$store.commit('setError', 'Ha ocurrido un error')
      } finally {
        this.$store.commit('setLoading')
      }
    },
    async openViewExpensesDialog(item) {
      try {
        this.$store.commit('setLoading')
        await this.openSupplyOrderDetails(item)
        this.expensesDialog = true
      } catch (error) {
      } finally {
        this.$store.commit('setLoading')
      }
    },
    closeExpensesDialog() {
      this.expensesDialog = false
    },
    async openSupplyOrderDetails(item) {
      this.expensesDetails = await this.$axios.$get(
        '/api/supplyOrder/' + item.supplyOrderId
      )
      this.expensesPayments = await this.$axios.$get(
        `/api/supplyOrder/payments/${item.supplyOrderId}`
      )
    },
    openExpenseDetails() { },
  },
}
</script>

<style>
</style>