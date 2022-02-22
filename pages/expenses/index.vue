<template>
  <v-container>
    <div class="d-flex flex-wrap justify-space-between py-2">
      <h2>Gastos</h2>
      <v-btn color="primary" @click="addExpense()">
        Agregar <v-icon class="pl-2">mdi-plus</v-icon>
      </v-btn>
    </div>
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
                  title="Editar Gasto"
                  @click="editExpense(item)"
                  >mdi-pencil</v-icon
                >
              </v-btn>
            </template>
            <span>Editar Gasto</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" @click="deleteExpense()">
                <v-icon color="primary" title="Editar Compra"
                  >mdi-delete</v-icon
                >
              </v-btn>
            </template>
            <span>Eliminar Gasto</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="addExpenseDialog" persistent min-width="500" width="700">
      <create-expense-dialog :closeDialog="addExpense" :getExpenses="getExpenses"></create-expense-dialog>
    </v-dialog>
  </v-container>
</template>

<script>
import JsonExcel from 'vue-json-excel'
import CreateExpenseDialog from '~/components/Dialogs/Expenses/CreateExpenseDialog.vue'
import ExpensesHeader from '~/components/SharedComponents/SharedHeader.vue'
import moment from 'moment'

export default {
  components: { CreateExpenseDialog, ExpensesHeader, JsonExcel },
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
        class: 'header-color white--text',
      },
      {
        text: 'Detalles',
        value: 'description',
        class: 'header-color white--text',
      },
      {
        text: 'Monto',
        value: 'totalAmount',
        class: 'header-color white--text',
      },
      {
        text: 'Acciones',
        value: 'actions',
        class: 'header-color white--text',
      },
    ],
    editItem: {},
    searchUrl: '/api/expenses/Expense',
    loading: false,
    page: 1,
    itemsPerPage: 10,
    addExpenseDialog: false,
  }),
  methods: {
    addExpense() {
      this.addExpenseDialog = !this.addExpenseDialog
    },

    editExpense(item) {},

    formatDate(date) {
      return moment(date).locale('es_py').format('DD/MM/yyyy')
    },

    async nextPage(value) {
      this.page = value
      await this.getExpenses()
    },

    async otherItemCount(value) {
      this.itemsPerPage = value
      await this.getExpenses()
    },

    async getExpenses() {
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
    this.getExpenses()
  },
}
</script>