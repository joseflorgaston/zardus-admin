<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary">
      Detalles de Compra
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="mt-4 black--text">
      <v-row>
        <v-col cols="12" sm="6">
          <div class="d-flex">
            <span class="font-weight-black">Fecha de la compra: </span>
            <div class="pl-1">
              <shared-formatted-date
                :date="item.createdOn || ''"
              ></shared-formatted-date>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <span class="font-weight-black">Proveedor:</span>
          <span>{{ item.provider }}</span>
        </v-col>
        <v-col cols="12" sm="6">
          <span class="font-weight-black">Metodo de pago:</span>
          <span>{{ item.paymentMethod }}</span>
        </v-col>
        <v-col cols="12" sm="6">
          <span class="font-weight-black">Encargado:</span>
          <span>{{ item.userName }}</span>
        </v-col>
        <v-col cols="12" sm="6">
          <span class="font-weight-black">Nro comprobante:</span>
          <span>{{ item.invoiceNumber }}</span>
        </v-col>
        <v-col cols="12" sm="6">
          <span class="font-weight-black">Cant de productos:</span>
          <span>{{ item.details.length }}</span>
        </v-col>
      </v-row>
      <v-divider class="mt-3"></v-divider>
      <center>
        <div class="mt-2">
          <h3>Detalle de la compra:</h3>
        </div>
      </center>
      <v-row class="pt-2 pb-0">
        <v-col class="pb-0" cols="3">
          <span class="subtitle-2 font-weight-bold"> Producto</span>
        </v-col>
        <v-col cols="3" class="pb-0">
          <span class="subtitle-2 font-weight-bold"> Precio</span>
        </v-col>
        <v-col cols="3" class="pb-0">
          <span class="subtitle-2 font-weight-bold"> Cantidad</span>
        </v-col>
        <v-col cols="3" class="pb-0">
          <span class="subtitle-2 font-weight-bold"> SubTotal</span>
        </v-col>
      </v-row>
      <v-row class="pt-0" v-for="(element, l) in item.details" :key="l">
        <v-col cols="3" class="pt-0">
          {{ element.product.name }}
        </v-col>
        <v-col cols="3" class="pt-0">
          <shared-money
            :amount="parseInt(element.price)"
          ></shared-money>
        </v-col>
        <v-col cols="3" class="pt-0">
          {{ element.quantity }} {{ element.product.unitOfMeasure }}
        </v-col>
        <v-col cols="3" class="pt-0">
          <shared-money :amount="parseInt(element.subTotal)"></shared-money>
        </v-col>
      </v-row>
      <div v-show="item.paymentMethod == 'Credito'">
        <v-divider class="mt-3"></v-divider>
        <center>
          <div class="mt-2">
            <h3>Pagos:</h3>
          </div>
        </center>
        <v-row class="pt-0 pb-0">
          <v-col class="pb-0" cols="3">
            <span class="subtitle-2 font-weight-bold"> Fecha de pago</span>
          </v-col>
          <v-col cols="3" class="pb-0">
            <span class="subtitle-2 font-weight-bold"> Monto Pagado</span>
          </v-col>
          <v-col cols="3" class="pb-0">
            <span class="subtitle-2 font-weight-bold"> Descripcion</span>
          </v-col>
          <v-col cols="3" class="pb-0">
            <span class="subtitle-2 font-weight-bold"> Fecha de carga</span>
          </v-col>
        </v-row>
        <v-row
          class="pt-5"
          v-for="(element, k) in payments"
          :key="k + item.details.length"
        >
          <v-col cols="3" class="pt-0">
            <shared-formatted-date :date="element.paymentDate">
            </shared-formatted-date>
          </v-col>
          <v-col cols="3" class="pt-0">
            <shared-money
              :amount="parseInt(element.totalAmount)"
            ></shared-money>
          </v-col>
          <v-col cols="3" class="pt-0">
            {{ element.description }}
          </v-col>
          <v-col cols="3" class="pb-0">
            <shared-formatted-date :date="element.createdOn">
            </shared-formatted-date>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <div class="d-flex">
        <span class="subtitle-2 font-weight-bold">Monto Total:</span>
        <shared-money
          :amount="parseInt(item.totalAmount)"
          class="pl-1 subtitle-2"
        ></shared-money>
      </div>
      <v-spacer></v-spacer>
      <v-btn color="green" class="white--text">
        <json-excel
          :data="getData()"
          :field="fields"
          class="btn green white--text"
        >
          Exportar
          <v-icon class="pl-1">mdi-download</v-icon>
        </json-excel>
      </v-btn>
      <v-btn text @click="closeDialog" class="pa-4">Cerrar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import JsonExcel from 'vue-json-excel'
import SharedFormattedDate from '~/components/SharedComponents/SharedFormattedDate.vue'
import moment from 'moment'
export default {
  components: { JsonExcel, SharedFormattedDate },
  props: {
    item: {
      type: Object,
      required: true,
    },
    payments: {
      type: [],
      required: false,
    },
    isFromBalance: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    fields: {
      'Fecha Creacion': 'Fecha_Creacion',
      Proveedor: 'Proveedor',
      'Metodo Pago': 'Metodo_Pago',
      'Monto Total': 'Monto_Total',
      'Monto Pagado': 'Monto_Pagado',
      Producto: 'Producto',
      Precio: 'Precio',
      Cantidad: 'Cantidad',
      Cantidad: 'Cantidad',
      Total: 'Total',
      'Fecha de pago': 'Fecha_Pago',
      Monto: 'Monto_Pago',
      Descripcion: 'Descripcion',
      'Fecha De Carga': 'Fecha_Carga',
    },
  }),
  methods: {
    closeDialog() {
      if (this.isFromBalance) return this.$emit('expensesDialog')

      this.$store.commit('setDialog')
    },
    exportToExcel() {},
    getData() {
      const excelData = []
      const item = {
        Proveedor: this.item.provider,
        Monto_Total: this.item.totalAmount,
        Monto_Pagado: this.item.totalPayed,
        Metodo_Pago: this.item.paymentMethod,
        Fecha_Creacion: this.formatDate(this.item.createdOn),
        Producto: this.item.details[0].product.name,
        Precio: this.item.details[0].product.price,
        Cantidad:
          this.item.details[0].quantity +
          ' ' +
          this.item.details[0].product.unitOfMeasure,
        Total: this.item.details[0].subTotal,
        Fecha_Pago: '',
        Monto_Pago: '',
        Descripcion: '',
        Fecha_Carga: '',
      }

      excelData.push(item)
      for (let index = 1; index < this.item.details.length; index++) {
        const details = {
          Producto: this.item.details[index].product.name,
          Precio: this.item.details[index].product.price,
          Cantidad:
            this.item.details[index].quantity +
            this.item.details[index].product.unitOfMeasure,
          Total: this.item.details[index].subTotal,
        }
        excelData.push(details)
      }
      excelData.push({ Total: this.item.totalAmount })
      if (this.payments.length > 0) {
        for (let index = 0; index < this.payments.length; index++) {
          const payments = {
            Fecha_Pago: this.formatDate(this.payments[index].paymentDate),
            Monto_Pago: this.payments[index].totalAmount,
            Descripcion: this.payments[index].description,
            Fecha_Carga: this.payments[index].createdOn,
          }
          excelData.push(payments)
        }
      }
      return excelData
    },
    formatDate(date) {
      return moment(date).locale('es_py').format('DD/MM/yyyy')
    },
  },
}
</script>

<style>
</style>