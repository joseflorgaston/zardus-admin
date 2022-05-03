<template>
  <v-card>
    <v-form class="px-4 px-sm-8" v-model="isValid">
      <div class="d-flex justify-space-between pt-6">
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
      <div class="d-flex flex-wrap">
        <div class="col-12">
          <v-divider></v-divider>
        </div>
      </div>
      <v-row class="py-3">
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
                prepend-inner-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                outlined
                dense
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
            prepend-inner-icon="mdi-account"
            v-model="formHeader.customer"
            :rules="rules"
            name="customer"
            outlined
            dense
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <h4>Metodo de pago</h4>
          <v-select
            :items="['Contado', 'Credito']"
            :rules="rules"
            v-model="formHeader.paymentMethod"
            prepend-inner-icon="mdi-account-cash-outline"
            dense
            outlined
          >
          </v-select>
        </v-col>
        <v-col cols="12" sm="4" md="3">
          <h4>Monto Delivery</h4>
          <v-text-field
            v-model="formHeader.deliveryAmount"
            placeholder="Delivery"
            prepend-inner-icon="mdi-moped"
            name="delivery"
            dense
            outlined
            type="number"
            @blur="calculateTotal()"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="4" md="3">
          <h4>RUC</h4>
          <v-text-field
            v-model="formHeader.ruc"
            placeholder="RUC"
            prepend-inner-icon="mdi-magnify"
            name="ruc"
            dense
            outlined
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="4" md="3">
          <h4>Nro. de comprobante.</h4>
          <v-text-field
            v-model="formHeader.invoiceNumber"
            placeholder="Nro de comprobante"
            prepend-inner-icon="mdi-receipt"
            name="invoiceNumber"
            dense
            outlined
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="4" md="3">
          <h4>Facturado por</h4>
          <v-text-field
            v-model="formHeader.billedBy"
            placeholder="Facturado por"
            prepend-inner-icon="mdi-account-arrow-right"
            name="billedBy"
            dense
            outlined
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="4" md="3">
          <h4>Observación</h4>
          <v-text-field
            v-model="formHeader.description"
            placeholder="Observación"
            prepend-inner-icon="mdi-alert-box-outline"
            name="description"
            dense
            outlined
          >
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <v-divider class="mb-5"></v-divider>
        </v-col>
      </v-row>
      <div class="d-flex mb-3">
        <h2>Agregar Producto.</h2>
      </div>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <h4>Producto</h4>
          <v-autocomplete
            prepend-inner-icon="mdi-seed"
            :rules="rules"
            :items="products"
            item-text="name"
            v-model="autocomplete"
            :search-input.sync="search"
            @change="selectProduct($event)"
            return-object
            outlined
            dense
          >
          </v-autocomplete>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <h4>Precio Gs.</h4>
          <v-text-field
            type="number"
            prepend-inner-icon="mdi-currency-usd"
            :rules="quantityRules"
            @keyup="getSubTotal()"
            @change="getSubTotal()"
            v-model="formDetails.price"
            name="price"
            outlined
            dense
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <h4>Cantidad ({{ this.selectedProduct.unitOfMeasure }})</h4>
          <v-text-field
            type="number"
            prepend-inner-icon="mdi-numeric-2-box-multiple-outline "
            :disabled="selectedProduct == null"
            @keyup="getSubTotal()"
            @change="getSubTotal()"
            :rules="quantityRules"
            v-model="formDetails.quantity"
            name="quantity"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>
    <v-row class="px-4 px-sm-8">
      <v-col cols="12" sm="12" md="10">
        <div class="d-flex justify-space-between">
          <div>
            <v-btn color="primary" :disabled="!isValid" @click="addProduct()"
              >Agregar</v-btn
            >
          </div>
          <div class="d-flex">
            <h3>
              SubTotal:
              <shared-money :amount="parseInt(subTotal)" />
            </h3>
          </div>
        </div>
      </v-col>
      <v-col cols="12">
        <v-divider class="mb-5"></v-divider>
      </v-col>
    </v-row>
    <div class="d-flex mb-3 px-4 px-sm-8 justify-space-between">
      <div class="d-flex">
        <h2>Productos seleccionados</h2>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon class="mx-6" v-bind="attrs" v-on="on">
              <v-icon color="primary" large @click="cleanTable"
                >mdi-broom</v-icon
              >
            </v-btn>
          </template>
          <span>Limpiar Tabla</span>
        </v-tooltip>
      </div>
      <span class="caption pt-3">
        <v-icon color="blue" class="mb-1" small
          >mdi-alert-circle-outline
        </v-icon>
        <span class="subtitle-2">
          Para crear el pedido clickea el boton guardar</span
        >
      </span>
    </div>
    <div class="px-4 px-sm-8">
      <v-card class="mt-5" elevation="4" outlined>
        <v-data-table :items="dataItems" :headers="dataHeaders">
          <template v-slot:[`item.isPrepared`]="{ item }">
            <v-checkbox v-model="item.product.isPrepared"> </v-checkbox>
          </template>
          <template v-slot:[`item.product`]="{ item }">
            {{ item.product.name }}
          </template>
          <template v-slot:[`item.subTotal`]="{ item }">
            <shared-money :amount="parseInt(item.subTotal)"></shared-money>
          </template>
          <template v-slot:[`item.price`]="{ item }">
            <div class="d-flex">
              <shared-money
                v-show="item.isEdit === false"
                :amount="parseInt(item.price)"
              ></shared-money>
            </div>
            <div>
              <v-text-field
                type="number"
                v-show="item.isEdit === true"
                dense
                v-model="item.price"
                @keyup="calculateProductTotal(item)"
                @blur="calculateTotal()"
              >
              </v-text-field>
            </div>
          </template>
          <template v-slot:[`item.quantity`]="{ item }">
            <div class="d-flex">
              <span v-show="!item.isEdit">
                {{ item.quantity }} {{ item.product.unitOfMeasure }}
              </span>
            </div>
            <div v-show="item.isEdit">
              <v-text-field
                type="number"
                v-show="item.isEdit === true"
                dense
                v-model="item.quantity"
                @keyup="calculateProductTotal(item)"
                @blur="calculateTotal()"
              >
              </v-text-field>
            </div>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn
              icon
              color="error"
              @click="removeItem(item)"
              title="Remover item"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-btn
              v-show="!item.isEdit"
              icon
              @click="editItemPrice(item)"
              color="primary"
              title="Editar precio"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              v-show="item.isEdit"
              icon
              @click="editItemPrice(item)"
              color="success"
              title="Confirmar"
            >
              <v-icon>mdi-check</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>

    <v-row class="px-4 px-sm-8">
      <v-col cols="12" md="10">
        <div class="d-flex justify-space-between">
          <v-btn
            color="primary"
            class="my-4"
            @click="saveOrder"
            :disabled="!hasItem"
            >Guardar</v-btn
          >
          <div class="d-flex mt-2 mr-5">
            <h3>
              Total: <shared-money :amount="parseInt(total)"></shared-money>
            </h3>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import moment from 'moment'
import { format, parseISO } from 'date-fns'
export default {
  components: {},
  data: () => ({
    isValid: true,
    isEdit: false,
    hasItem: false,
    rules: [(v) => !!v || 'Este campo es requerido'],
    quantityRules: [
      (v) => v > 0 || 'Coloca un numero mayor a 0',
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
      customer: '',
      invoiceNumber: '',
      numberOfPayments: 0,
      deliveryAddress: '',
      deliveryAmount: 0,
    },
    search: null,
    formDetails: {
      product: '',
      quantity: 0,
      price: 0,
    },
    editItem: [],
    dataItems: [],
    dataHeaders: [
      {
        text: 'Preparado',
        value: 'isPrepared',
        class: 'header-color white--text',
      },
      {
        text: 'Producto',
        value: 'product',
        class: 'header-color white--text',
      },
      {
        text: 'Precio',
        value: 'price',
        class: 'header-color white--text',
      },
      {
        text: 'Cantidad',
        value: 'quantity',
        class: 'header-color white--text',
      },
      {
        text: 'Total',
        value: 'subTotal',
        class: 'header-color white--text',
      },
      {
        text: 'Acciones',
        value: 'actions',
        class: 'header-color white--text',
      },
    ],
    menu: false,
    today: moment(new Date()).locale('es_py').format('dddd, DD MMMM, yyyy'),
    paymentMethod: ['Contado', 'Crédito'],
  }),

  async beforeMount() {
    this.$store.commit('setLoading')
    try {
      if (this.$route.query._id != null) {
        this.isEdit = true
        const item = await this.$axios.$get(
          '/api/order/' + this.$route.query._id
        )
        this.setItem(item)
      }
    } catch (error) {
      console.log(error)
      this.$store.commit('setError', error.toString())
    } finally {
      this.$store.commit('setLoading')
    }
  },
  methods: {
    setItem(item) {
      this.dataItems = item.details
      this.hasItem = true
      this.formHeader.deliveryDate = format(
        parseISO(item.deliveryDate),
        'yyyy-MM-dd'
      )
      this.formHeader.customer = item.customer
      this.formHeader.paymentMethod = item.paymentMethod
      this.formHeader.deliveryAmount = item.deliveryAmount
      this.formHeader.ruc = item.ruc
      this.formHeader.invoiceNumber = item.invoiceNumber
      this.formHeader.billedBy = item.billedBy
      this.formHeader.description = item.description
      this.total = item.totalAmount
      for (let i = 0; i < item.details.length; i++) {
        const element = item.details[i]
        element.isEdit = false
        this.editItem.push(element)
      }
    },
    calculateProductTotal(item) {
      if (item.product.unitOfMeasure == 'gramos') {
        item.subTotal = item.quantity * 0.001 * item.price
        console.log(item.subTotal)
        this.$forceUpdate()
        return
      }
      item.subTotal = item.quantity * item.price
      this.$forceUpdate()
    },
    calculateTotal() {
      console.log(this.dataItems)
      this.total = this.dataItems.reduce((accumulator, object) => {
        return accumulator + object.subTotal
      }, 0)
      this.total = this.total + parseInt(this.formHeader.deliveryAmount)
    },
    getSubTotal() {
      if (this.selectedProduct.unitOfMeasure == 'gramos')
        return (this.subTotal =
          this.formDetails.price * (this.formDetails.quantity / 1000))

      return (this.subTotal =
        this.formDetails.price * this.formDetails.quantity)
    },
    cleanTable() {
      this.dataItems = []
      this.total = parseInt(this.formDetails.deliveryAmount)
    },
    editItemPrice(item) {
      item.isEdit = !item.isEdit
      this.$forceUpdate()
    },
    cleanHeader() {
      this.formHeader = {
        deliveryDate: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
        paymentMethod: 'Contado',
        customer: '',
        numberOfPayments: 0,
        deliveryAddress: '',
        deliveryAmount: 0,
        ruc: '',
        invoiceNumber: '',
        billedBy: '',
        description: '',
      }
      this.formDetails = {
        product: '',
        quantity: 0,
        price: 0,
      }
      this.subTotal = 0
    },
    async saveOrder() {
      this.$store.commit('setLoading')
      const item = {
        totalAmount: this.total,
        deliveryDate: this.formHeader.deliveryDate,
        customer: this.formHeader.customer,
        lowerCaseCustomer: this.formHeader.customer.toLowerCase(),
        paymentMethod: this.formHeader.paymentMethod,
        deliveryAmount: this.formHeader.deliveryAmount,
        numberOfPayments: this.formHeader.numberOfPayments,
        ruc: this.formHeader.ruc,
        invoiceNumber: this.formHeader.invoiceNumber,
        billedBy: this.formHeader.billedBy,
        description: this.formHeader.description,
        total: this.total,
        details: this.dataItems,
        deliveryAddress: 'N/A',
        userName: this.$auth.$state.user.userName,
      }
      try {
        if (this.isEdit) {
          await this.$axios.put('/api/order/update/' + this.$route.query._id, {
            oldItem: this.editItem,
            editedItem: item,
          })
          this.$store.commit('setSuccess', 'Pedido editado exitosamente')
        } else {
          await this.$axios.post('/api/order/create', item)
          this.$store.commit('setSuccess', 'Pedido creado exitosamente')
        }
      } catch (error) {
        console.log(error)
        this.$store.commit('setError', 'Ha ocurrido un error')
      }
      this.$store.commit('setLoading')
      this.$router.push('/orders')
    },
    removeItem(item) {
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
      if (this.dataItems.length > 0) {
        const filter = this.dataItems.filter(
          (item) => item.product.name == this.selectedProduct.name
        )
        if (filter.length > 0) {
          this.autocomplete = null
          this.$store.commit(
            'setError',
            'Este producto ya se agrego en la tabla'
          )
          return false
        }
      }
      let stock = this.selectedProduct.stock - this.selectedProduct.inOrder
      stock = stock - this.formDetails.quantity
      if (stock < 0) {
        this.$store.commit(
          'setError',
          'La cantidad del producto agregado supera al stock por ' + stock * -1
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
      const item = {
        subTotal: this.subTotal,
        product: this.selectedProduct,
        quantity: this.formDetails.quantity,
        price: parseInt(this.formDetails.price),
        isEdit: false,
      }
      this.dataItems.push(item)
      this.total = this.total + parseInt(this.subTotal)
      this.hasItem = true
    },
    selectProduct(value) {
      if (value == null) return
      this.autocomplete = null
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
      const product = await this.$axios.$get(`/api/allProducts/${val}`)
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