<template>
  <v-container class="white">
    <v-form v-model="isValid">
      <div class="d-flex justify-space-between pb-4">
        <div class="d-flex">
          <h2>Nuevo Pedido</h2>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon class="mx-6" v-bind="attrs" v-on="on">
                <v-icon color="primary" large @click="cleanHeader()"
                  >mdi-broom</v-icon
                >
              </v-btn>
            </template>
            <span>Limpiar Formulario</span>
          </v-tooltip>
        </div>
        <div>
          <h2>{{ this.today }}</h2>
        </div>
      </div>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <h4>Fecha de entrega</h4>
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
              v-model="formHeader.deliveryDate"
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
                @click="$refs.menu.save(formHeader.deliveryDate)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <h4>Cliente</h4>
          <v-text-field
            placeholder="Cliente"
            prepend-icon="mdi-account"
            v-model="formHeader.customerName"
            :rules="rules"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <h4>Metodo de pago</h4>
          <v-select
            :items="['Contado', 'Credito']"
            :rules="rules"
            v-model="formHeader.paymentMethod"
            prepend-icon="mdi-account-cash-outline"
          >
          </v-select>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
          v-if="formHeader.paymentMethod == 'Credito'"
        >
          <h4>Cantidad de pagos</h4>
          <v-text-field
            type="number"
            :rules="quantityRules"
            v-model="formHeader.numberOfPayments"
            placeholder="Cantidad de pagos"
            prepend-icon="mdi-numeric-2-box-multiple-outline "
          ></v-text-field>
        </v-col>
      </v-row>

      <v-divider class="primary my-5"></v-divider>
      <div class="d-flex mb-3">
        <h2>Agregar Producto.</h2>
      </div>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <h4>Producto</h4>
          <v-autocomplete
            prepend-icon="mdi-seed"
            :rules="rules"
            :items="products"
            item-text="name"
            v-model="autocomplete"
            :search-input.sync="search"
            @change="selectProduct($event)"
            return-object
          >
          </v-autocomplete>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <h4>Precio Gs.</h4>
          <v-text-field
            type="number"
            prepend-icon="mdi-currency-usd"
            :rules="quantityRules"
            @keypress="getSubTotal()"
            @change="getSubTotal()"
            v-model="formDetails.price"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <h4>Cantidad ({{ this.selectedProduct.unitOfMeasure }})</h4>
          <v-text-field
            type="number"
            prepend-icon="mdi-numeric-2-box-multiple-outline "
            :disabled="selectedProduct == null"
            :rules="quantityRules"
            v-model="formDetails.quantity"
            @keypress="getSubTotal()"
            @change="getSubTotal()"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>
    <v-row>
      <v-col cols="12" sm="12" md="10">
        <div class="d-flex justify-space-between">
          <v-btn color="primary" :disabled="!isValid" @click="addProduct()"
            >Agregar</v-btn
          >
          <div class="d-flex">
            <h3>SubTotal: <shared-money :amount="parseInt(subTotal)" /></h3>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-divider class="primary my-5"></v-divider>
    <div class="d-flex mb-3">
      <h2>Productos seleccionados</h2>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon class="mx-6" v-bind="attrs" v-on="on">
            <v-icon color="primary" large @click="cleanTable">mdi-broom</v-icon>
          </v-btn>
        </template>
        <span>Limpiar Tabla</span>
      </v-tooltip>
    </div>
    <v-card class="mt-5" elevation="4" outlined>
      <v-data-table :items="dataItems" :headers="dataHeaders">
        <template v-slot:[`item.product`]="{ item }">
          {{ item.product.name }}
        </template>
        <template v-slot:[`item.subTotal`]="{ item }">
          <shared-money :amount="parseInt(item.subTotal)"></shared-money>
        </template>
        <template v-slot:[`item.price`]="{ item }">
          <div class="d-flex">
            <shared-money :amount="parseInt(item.price)"></shared-money>
          </div>
        </template>
        <template v-slot:[`item.quantity`]="{ item }">
          <div class="d-flex">
            {{ item.quantity }} {{ item.product.unitOfMeasure }}
          </div>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn icon>
            <v-icon color="error" @click="removeItem(item)" title="Remover item"
              >mdi-close</v-icon
            >
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
    <v-row>
      <v-col cols="12" sm="12" md="10">
        <div class="d-flex justify-space-between">
          <v-btn
            color="primary"
            class="my-4"
            @click="saveOrder"
            :disabled="!hasItem"
            >Guardar</v-btn
          >
          <div class="mt-2 mr-5">
            <h3>Total: {{ this.total }}</h3>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment'
import { format, parseISO } from 'date-fns'
import SharedMoney from '../../components/SharedComponents/SharedMoney.vue'
export default {
  data: () => ({
    isValid: true,
    hasItem: false,
    rules: [(v) => !!v || 'Este campo es requerido'],
    quantityRules: [
      (v) => v >= 0 || 'Coloca un numero mayor a 0',
      (v) => !!v || 'Este campo es requerido',
    ],
    products: [],
    autocomplete: null,
    subTotal: 0,
    total: 0,
    selectedProduct: {},
    formHeader: {
      deliveryDate: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
      paymentMethod: 'Contado',
      customerName: '',
      numberOfPayments: 0,
      deliveryAddress: '',
    },
    search: null,
    formDetails: {
      product: '',
      quantity: 0,
      price: 0,
    },
    dataItems: [],
    dataHeaders: [
      {
        text: 'Producto',
        value: 'product',
        class: 'header-color',
      },
      {
        text: 'Precio',
        value: 'price',
        class: 'header-color',
      },
      {
        text: 'Cantidad',
        value: 'quantity',
        class: 'header-color',
      },
      {
        text: 'Total',
        value: 'subTotal',
        class: 'header-color',
      },
      {
        text: 'Acciones',
        value: 'actions',
        class: 'header-color',
      },
    ],
    menu: false,
    today: moment(new Date()).locale('es_py').format('dddd, DD MMMM, yyyy'),
    paymentMethod: ['Contado', 'Crédito'],
  }),

  methods: {
    getSubTotal() {
      if (this.formDetails.quantity > 0 && this.formDetails.price > 0) {
        this.subTotal = this.formDetails.quantity * this.formDetails.price
      }
    },
    cleanTable() {
      this.total = 0;
      this.dataItems = [];
    },
    cleanHeader() {
      this.formHeader = {
        deliveryDate: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
        paymentMethod: 'Contado',
        customerName: '',
        numberOfPayments: 0,
        deliveryAddress: '',
      }
      this.formDetails = {
        product: '',
        quantity: 0,
        price: 0,
      }
      this.subTotal = 0
    },
    async saveOrder() {
      const item = {
        deliveryDate: this.formHeader.deliveryDate,
        totalAmount: this.total,
        client: this.formHeader.customerName,
        paymentMethod: this.formHeader.paymentMethod,
        numberOfPayments: this.formHeader.numberOfPayments,
        total: this.total,
        details: this.dataItems,
        deliveryAddress: 'N/A',
      }
      await this.$axios.post('/api/order/create', item)
      this.$router.push('/orders')
      this.$store.commit('setSuccess', 'Pedido creado exitosamente')
    },
    removeItem(item, event) {
      const index = this.dataItems.indexOf(item)
      this.total = this.total - item.subTotal
      this.dataItems.splice(index, 1)
      if (this.dataItems.length == 0) {
        this.hasItem = false
      }
    },
    clearDetailsForm() {
      this.formDetails = {
        product: '',
        quantity: 0,
        price: 0,
      }
      this.subTotal = 0
      this.search = null
    },
    stockIsValid() {
      let stock = this.selectedProduct.stock - this.selectedProduct.inOrder
      stock = stock - this.formDetails.quantity
      if (stock < 0) {
        alert(
          'La cantidad del producto agregado supera al stock por' + stock * -1
        )
        return false
      }
      return true
    },
    addProduct() {
      if (!this.stockIsValid()) {
        return
      }
      this.formDetails.subTotal = this.subTotal
      this.formDetails.product = this.selectedProduct
      this.dataItems.push(this.formDetails)
      this.total = this.total + this.subTotal
      this.hasItem = true
      this.clearDetailsForm()
    },
    selectProduct(value) {
      console.log(value)
      if (value == null) return
      this.formDetails.price = value.price
      this.formDetails.quantity = 0
      this.subTotal = 0
      this.selectedProduct = value
    },
  },
  watch: {
    async search(val) {
      if (val == null) {
        this.formDetails.price = 0
        return
      }
      if (val.length < 2) return
      const product = await this.$axios.$get(`/api/orders/${val}`)
      this.products = product.data
    },
  },
  computed: {
    computedDateFormattedMomentjs: {
      get() {
        return this.formHeader.deliveryDate
          ? moment(this.formHeader.deliveryDate)
              .locale('es_py')
              .format('dddd, DD MMMM, yyyy')
          : ''
      },
      set(value) {
        return this.formHeader.deliveryDate
          ? moment(this.formHeader.deliveryDate)
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