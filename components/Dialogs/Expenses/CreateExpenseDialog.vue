<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary">
      Agregar Gasto.
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>
    <v-form v-model="isValid">
      <v-row class="my-3 px-0" style="width: 100% !important">
        <v-col offset="1" cols="10" sm="5">
          <h3>Fecha</h3>
          <v-menu
            ref="menu"
            v-model="menu"
            :return-value.sync="computedDateFormattedMomentjs"
            :close-on-content-click="false"
            transition="scale-transition"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-combobox
                v-model="computedDateFormattedMomentjs"
                color="primary"
                prepend-inner-icon="mdi-calendar"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-combobox>
            </template>
            <v-date-picker
              v-model="form.paymentDate"
              locale="es-py"
              title="Entrega"
              header-color="primary"
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.menu.save(form.paymentDate)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col offset="1" offset-sm="0" cols="10" sm="5">
          <h3>Monto</h3>
          <v-text-field
            placeholder="Monto"
            prepend-inner-icon="mdi-cash"
            outlined
            v-model="form.totalAmount"
            type="number"
            :rules="rules"
            name="amount"
          >
          </v-text-field>
        </v-col>
        <v-col offset="1" cols="10">
          <h3>Descripcion</h3>
          <v-textarea
            height="100"
            placeholder="Descripcion"
            outlined
            v-model="form.description"
            :rules="required"
            name="description"
          >
          </v-textarea>
        </v-col>
      </v-row>
    </v-form>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" :disabled="!isValid" @click="addExpense"
        >Agregar</v-btn
      >
      <v-btn @click="closeDialog">Cerrar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from 'moment'
import { format, parseISO } from 'date-fns'
export default {
  props: {
    closeDialog: {
      type: Function,
    },
    getExpenses: {
      type: Function,
    },
  },
  data: () => ({
    form: {
      paymentDate: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
      amount: 0,
      description: '',
      type: 'Expense',
    },
    rules: [
      (v) => v > 0 || 'Este campo debe ser mayor a 0',
      (v) => !!v || 'Este campo es requerido',
    ],
    required: [(v) => !!v || 'Este campo es requerido'],
    isValid: false,
    menu: false,
  }),
  methods: {
    async addExpense() {
      try {
        this.$store.commit('setLoading')
        this.form.totalAmount = parseInt(this.form.totalAmount)
        await this.$axios.post('/api/expense/create', this.form)
        this.$store.commit('setSuccess', 'Gasto creado exitosamente')
      } catch (error) {
        console.log(error)
        this.$store.commit('setError', 'Ha ocurrido un error')
      } finally {
        this.closeDialog()
        this.$store.commit('setLoading')
        await this.getExpenses()
      }
    },
  },
  computed: {
    computedDateFormattedMomentjs: {
      get() {
        return this.form.paymentDate
          ? moment(this.form.paymentDate)
              .locale('es_py')
              .format('dddd, DD MMMM, yyyy')
          : ''
      },
      set(value) {
        return this.form.paymentDate
          ? moment(this.form.paymentDate)
              .locale('es_py')
              .format('dddd, DD MMMM, yyyy')
          : ''
      },
    },
  },
}
</script>

<style>
</style>