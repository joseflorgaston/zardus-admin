<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary">
      Detalles del Pedido
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="mt-4 black--text">
      <v-row>
        <v-col cols="12" sm="4">
          <div class="d-flex">
            <span class="font-weight-black">Fecha del pedido: </span>
            <div class="pl-1">
              <shared-formatted-date
                :date="item.createdOn || ''"
              ></shared-formatted-date>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <span class="font-weight-black">Cliente:</span>
          <span>{{ item.customer }}</span>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="d-flex">
            <span class="font-weight-black">Fecha de entrega: </span>
            <div class="pl-1">
              <shared-formatted-date
                :date="item.deliveryDate || ''"
              ></shared-formatted-date>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <span class="font-weight-black">Metodo de pago:</span>
          <span>{{ item.paymentMethod }}</span>
        </v-col>
        <v-col cols="12" sm="4">
          <span class="font-weight-black">Encargado:</span>
          <span>{{ item.userName }}</span>
        </v-col>
        <v-col cols="12" sm="4">
          <span class="font-weight-black">Estado:</span>
          <span :class="getStatusClass()">{{ item.status }}</span>
        </v-col>
        <v-col cols="12">
          <span class="font-weight-black">Observación:</span>
          <span>{{ item.description }}</span>
        </v-col>
      </v-row>
      <v-divider class="mt-3"></v-divider>
      <center>
        <div class="mt-2">
          <h3>Detalle del pedido:</h3>
        </div>
      </center>
      <v-row class="pt-2 pb-0">
        <v-col class="pb-0" cols="4">
          <span class="subtitle-2 font-weight-bold"> Producto</span>
        </v-col>
        <v-col cols="3" class="pb-0">
          <span class="subtitle-2 font-weight-bold"> Precio</span>
        </v-col>
        <v-col cols="2" class="pb-0">
          <span class="subtitle-2 font-weight-bold"> Cantidad</span>
        </v-col>
        <v-col cols="3" class="pb-0">
          <span class="subtitle-2 font-weight-bold"> SubTotal</span>
        </v-col>
      </v-row>
      <v-row class="pt-0" v-for="(element, k) in item.details" :key="k">
        <v-col cols="4" class="pt-0">
          {{ element.product.name }}
        </v-col>
        <v-col cols="3" class="pt-0">
          <shared-money
            :amount="parseInt(element.price)"
          ></shared-money>
        </v-col>
        <v-col cols="2" class="pt-0">
          {{ element.quantity }} {{ element.product.unitOfMeasure }}
        </v-col>
        <v-col cols="3" class="pt-0">
          <shared-money :amount="parseInt(element.subTotal)"></shared-money>
        </v-col>
      </v-row>
      <div v-show="item.paymentMethod == 'Credito' && payments.length > 0">
        <v-divider class="mt-3"></v-divider>
        <center>
          <div class="mt-2">
            <h3>Pagos:</h3>
          </div>
        </center>
        <v-row class="pt-0 pb-0" style="width: 100% !important">
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
          style="width: 100% !important"
          class="pt-5"
          v-for="(element, k) in payments"
          :key="k + item.details.length"
        >
          <v-col cols="3" class="pt-0">
            <shared-formatted-date :date="element.paymentDate">
            </shared-formatted-date>
          </v-col>
          <v-col cols="3" class="pt-0">
            <shared-money :amount="element.totalAmount"></shared-money>
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
      <v-divider class="mt-3"></v-divider>
    </v-card-text>
    <v-card-actions>
      <div class="d-flex">
        <span class="subtitle-2 font-weight-bold">Monto Total:</span>
        <shared-money
          :amount="item.totalAmount"
          class="pl-1 subtitle-2"
        ></shared-money>
      </div>
      <v-spacer></v-spacer>
      <v-btn color="green" class="white--text" @click="exportToExcel()">
        <json-excel
          :data="getData()"
          :fields="fields"
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
  components: { JsonExcel },
  props: {
    item: {
      type: Object,
      required: true,
    },
    payments: {
      type: [],
      required: false,
      default: []
    },
  },
  data: () => ({
    fields: {
      'Fecha Creacion': 'Fecha_Creacion',
      'Fecha Entrega': 'Fecha_Entrega',
      Cliente: 'Cliente',
      'Metodo Pago': 'Metodo_Pago',
      Estado: 'Estado',
      'Monto Total': 'Monto_Total',
      'Monto Pagado': 'Monto_Pagado',
      Producto: 'Producto',
      Precio: 'Precio',
      Cantidad: 'Cantidad',
      Total: 'Total',
      'Fecha de pago': 'Fecha_Pago',
      Monto: 'Monto_Pago',
      Descripcion: 'Descripcion',
      'Fecha De Carga': 'Fecha_Carga',
    },
    excelData: {},
  }),
  methods: {
    closeDialog() {
      this.$store.commit('setDialog')
    },
    getStatusClass() {
      if (this.item.status == 'Aguardando') {
        return 'blue--text ligthen-1'
      } else if (this.item.status == 'Cancelado') {
        return 'red--text'
      } else if (this.item.status == 'Preparado') {
        return 'yellow--text'
      }
      return 'success--text'
    },
    exportToExcel() {},
    getData() {
      const excelData = []
      const item = {
        Fecha_Entrega: this.formatDate(this.item.deliveryDate),
        Cliente: this.item.customer,
        Monto_Total: this.item.totalAmount,
        Monto_Pagado: this.item.totalPayed,
        Metodo_Pago: this.item.paymentMethod,
        Estado: this.item.status,
        Fecha_Creacion: this.formatDate(this.item.createdOn),
        Producto: this.item.details[0].product.name,
        Precio: this.item.details[0].product.price,
        Cantidad:
          this.item.details[0].quantity +
          this.item.details[0].product.unitOfMeasure,
        Total: this.item.details[0].subTotal,
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
            Fecha_Carga: this.formatDate(this.payments[index].createdOn),
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