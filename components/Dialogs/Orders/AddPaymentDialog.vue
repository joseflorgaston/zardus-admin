<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary">
      Agregar Pago.
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>
    <div class="px-13 py-4 d-flex justify-space-between flex-wrap">
      <div class="d-flex">
        <span class="subtitle-2 font-weight-bold">Monto Total:</span>
        <shared-money
          :amount="item.totalAmount"
          class="pl-1 subtitle-2"
        ></shared-money>
      </div>
      <div class="d-flex">
        <span class="subtitle-2 font-weight-bold">Monto Pagado:</span>
        <shared-money
          :amount="item.totalPayed || 0"
          class="pl-1 subtitle-2"
        ></shared-money>
      </div>
    </div>
    <v-divider></v-divider>
    <v-form v-model="isValid" class="py-3">
      <v-row style="width: 100%">
        <v-col offset="1" cols="10" sm="5">
          <h4>Fecha de pago</h4>
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
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-combobox>
            </template>
            <v-date-picker
              v-model="paymentDate"
              locale="es-py"
              title="Entrega"
              header-color="primary"
              scrollable
              :max="today()"
            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(paymentDate)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col offset="1" offset-sm="0" cols="10" sm="5">
          <h4>Monto</h4>
          <v-text-field
            type="number"
            v-model="payAmount"
            :rules="[
              (v) => v > 0 || 'Este campo debe ser mayor a 0',
              (v) => !!v || 'Este campo es requerido',
            ]"
            @keyup="validateAmount"
          >
          </v-text-field>
        </v-col>
      </v-row>
    </v-form>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        @click="addPayment"
        class="pa-4"
        color="primary"
        :disabled="!isValid || !enabled"
        >Agregar Pago</v-btn
      >
      <v-btn text @click="closeDialog" class="pa-4">Cerrar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from 'moment'
import { format, parseISO } from 'date-fns'

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    payAmount: 0,
    isValid: true,
    menu: false,
    enabled: true,
    paymentDate: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
  }),
  methods: {
    closeDialog() {
      this.$emit('closeDialog', this.item)
    },
    async addPayment() {
      try {
        this.enabled = false;
        this.$store.commit('setLoading')
        const item = {
          _id: this.item._id,
          createdOn: this.item.createdOn,
          details: this.item.details,
          paymentMethod: this.item.paymentMethod,
          provider: this.item.provider,
          totalAmount: this.item.totalAmount,
          totalPayed: this.item.totalPayed,
          userName: this.item.userName,
          payAmount: parseInt(this.payAmount),
          paymentDate: this.paymentDate,
        }
        item.totalPayed += parseInt(this.payAmount)
        if (item.totalAmount == item.totalPayed) item.status = 'Pagado'
        if(item.totalAmount < item.totalPayed) {
          this.$store.commit("setError", "El monto pagado supera el monto total");
          return this.$store.commit('setLoading')
        }

        await this.$axios.$post(`api/order/setPayment/${item._id}`, item)
        this.$store.commit('setSuccess', 'Pago guardado exitosamente')
      } catch (error) {
        this.$store.commit('setError', 'Ha ocurrido un error')
        console.log(error)
      } finally {
        this.closeDialog();
        this.payAmount = 0
        this.enabled = true
        await this.$store.dispatch('sharedSearch', {
          pagination: {
            page: 1,
            itemsPerPage: 10,
          },
          searchUrl: '/api/orders/',
          searchText: this.$store.state.searchText,
          dates: this.$store.state.filterDates,
        })
        this.$store.commit('setLoading')
      }
    },
    today() {
      return Date().toString()
    },
    validateAmount() {
      if (this.payAmount > this.item.totalAmount - this.item.totalPayed) {
        this.payAmount = this.item.totalAmount - this.item.totalPayed
      }
    },
  },
  computed: {
    computedDateFormattedMomentjs: {
      get() {
        return this.paymentDate
          ? moment(this.paymentDate)
              .locale('es_py')
              .format('dddd, DD MMMM, yyyy')
          : ''
      },
      set(value) {
        return this.paymentDate
          ? moment(this.paymentDate)
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