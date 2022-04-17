<template>
  <v-card>
    <v-form v-model="isValid">
      <div class="container-fluid d-flex flex-wrap px-sm-4 align-center">
        <div></div>
        <div class="col-12 mt-3 d-flex flex-wrap">
          <h2>Nueva Compra</h2>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon class="mx-6" v-bind="attrs" v-on="on">
                <v-icon color="primary" large @click="cleanHeader()">mdi-broom</v-icon>
              </v-btn>
            </template>
            <span>Limpiar Formulario</span>
          </v-tooltip>
        </div>
        <div class="col-12">
          <v-divider></v-divider>
        </div>
      </div>
      <div class="container-fluid d-flex flex-wrap px-sm-4 align-center">
        <div class="col-12 col-sm-4">
          <h4>Proveedor</h4>
          <v-autocomplete prepend-inner-icon="mdi-truck" placeholder="Proveedor" :rules="rules" :items="providers"
            item-text="name" v-model="provider" :search-input.sync="searchProvider" @change="selectProvider($event)"
            return-object outlined dense>
          </v-autocomplete>
        </div>
        <div class="col-12 col-sm-4">
          <h4>Método de pago</h4>
          <v-select :items="['Contado', 'Credito']" :rules="rules" v-model="formHeader.paymentMethod"
            prepend-inner-icon="mdi-account-cash-outline" dense outlined>
          </v-select>
        </div>
        <div class="col-12 col-sm-4">
          <h4>Nro. de comprobante.</h4>
          <v-text-field v-model="formHeader.invoiceNumber" placeholder="Nro de comprobante" prepend-inner-icon="mdi-receipt"
            :rules="rules" name="invoiceNumber" outlined dense>
          </v-text-field>
        </div>
        <div class="col-12" style="padding-top: 0px">
          <v-divider></v-divider>
        </div>
      </div>
      <div class="container-fluid d-flex flex-wrap px-sm-4 align-center">
        <div class="col-12">
          <h2>Agregar Producto.</h2>
        </div>
      </div>
      <div class="container-fluid d-flex flex-wrap px-sm-4 align-center">
        <div class="col-12 col-sm-6 col-md-4">
          <h4>Producto</h4>
          <v-autocomplete prepend-inner-icon="mdi-seed" :rules="rules" :items="products" item-text="name"
            v-model="autocomplete" id="autocomplete" :search-input.sync="search" @change="selectProduct($event)"
            return-object dense outlined>
          </v-autocomplete>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <h4>Precio Gs.</h4>
          <v-text-field type="number" prepend-inner-icon="mdi-currency-usd" :rules="quantityRules" @keyup="setSubTotal()"
            @change="setSubTotal()" v-model="formDetails.price" name="price" outlined dense>
          </v-text-field>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <h4>Cantidad ({{ this.selectedProduct.unitOfMeasure }})</h4>
          <v-text-field type="number" prepend-inner-icon="mdi-numeric-2-box-multiple-outline " @keyup="setSubTotal()"
            @change="setSubTotal()" :disabled="selectedProduct == null" :rules="quantityRules"
            v-model="formDetails.quantity" name="quantity" dense outlined></v-text-field>
        </div>
      </div>
    </v-form>
    <div class="container-fluid d-flex flex-wrap px-sm-4 align-center">
      <div class="col-12 col-md-10">
        <div class="d-flex justify-space-between flex-wrap">
          <v-btn color="primary" :disabled="!isValid" @click="addProduct()">Agregar</v-btn>
          <div class="d-flex">
            <h3>SubTotal:
              <shared-money :amount="parseInt(subTotal)" />
            </h3>
          </div>
        </div>
      </div>
      <div class="col-12">
        <v-divider></v-divider>
      </div>
    </div>
    <div class="container-fluid d-flex flex-wrap px-sm-4 align-center">
      <div class="col-12">
        <div class="d-flex justify-space-between">
          <div class="d-flex flex-wrap">
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
          <span class="caption pt-3">
            <v-icon color="blue" class="mb-1" small>mdi-alert-circle-outline
            </v-icon>
            <span class="subtitle-2">
              Para crear el pedido clickea el boton guardar</span>
          </span>
        </div>
      </div>
    </div>
    <div class="container-fluid d-flex flex-wrap px-sm-4 align-center">
      <div class="col-12">
        <v-card class="mt-5" outlined>
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
                <v-icon color="error" @click="removeItem(item)" title="Remover item">mdi-close</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>
    <div class="container-fluid d-flex flex-wrap px-sm-4 align-center">
      <div class="col-12">
        <div class="d-flex justify-space-between">
          <v-btn color="primary" class="my-4" @click="saveOrder" :disabled="!hasItem">Guardar</v-btn>
          <div class="d-flex mt-2 mr-5">
            <h3>
              Total: <shared-money :amount="parseInt(total)"></shared-money>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import moment from 'moment'
import { format, parseISO } from 'date-fns'
import SharedMoney from '../../components/SharedComponents/SharedMoney.vue'
export default {
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
    providers: [],
    autocomplete: null,
    provider: null,
    subTotal: 0,
    total: 0,
    selectedProduct: {},
    formHeader: {
      deliveryDate: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
      paymentMethod: 'Contado',
      provider: '',
      deliveryAddress: '',
      invoiceNumber: '',
    },
    search: null,
    searchProvider: null,
    formDetails: {
      product: '',
      quantity: 0,
      price: 0,
    },
    editItem: [],
    dataItems: [],
    dataHeaders: [
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
    if (this.$route.query._id != null) {
      this.isEdit = true
      const item = await this.$axios.$get(
        '/api/supplyOrder/' + this.$route.query._id
      )
      this.setItem(item)
    }
    this.$store.commit('setLoading')
  },

  methods: {
    setItem(item) {
      this.dataItems = item.details
      this.hasItem = true
      this.formHeader.paymentMethod = item.paymentMethod
      this.formHeader.provider = item.provider
      this.formHeader.invoiceNumber = item.invoiceNumber
      this.total = item.totalAmount
      for (let i = 0; i < item.details.length; i++) {
        const element = item.details[i]
        this.editItem.push(element)
      }
    },
    setSubTotal() {
      if (!this.formDetails.price || !this.formDetails.quantity) return

      this.subTotal = parseInt(
        this.formDetails.price * (this.formDetails.quantity / 1000)
      )
    },
    cleanTable() {
      this.total = 0
      this.dataItems = []
    },
    cleanHeader() {
      this.formHeader = {
        deliveryDate: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
        paymentMethod: 'Contado',
        provider: '',
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
      this.$store.commit('setLoading')
      const item = {
        deliveryDate: this.formHeader.deliveryDate,
        totalAmount: this.total,
        provider: this.formHeader.provider,
        lowerCaseProvider: this.formHeader.provider.toLowerCase(),
        paymentMethod: this.formHeader.paymentMethod,
        total: this.total,
        details: this.dataItems,
        deliveryAddress: 'N/A',
        totalPayed: this.formHeader.paymentMethod == 'Contado' ? this.total : 0,
        userName: this.$auth.$storage.getLocalStorage('user').userName ?? '',
        invoiceNumber: this.formHeader.invoiceNumber,
      }
      try {
        if (this.isEdit) {
          await this.$axios.put(
            '/api/supplyOrder/update/' + this.$route.query._id,
            {
              oldItem: this.editItem,
              editedItem: item,
            }
          )
          this.$store.commit('setSuccess', 'Compra editada exitosamente')
        } else {
          await this.$axios.post('/api/supplyOrder/create', item)
          this.$store.commit('setSuccess', 'Compra creada exitosamente')
        }
      } catch (error) {
        console.log(error)
        this.$store.commit('setError', 'Ha ocurrido un error')
      }
      this.$store.commit('setLoading')
      this.$router.push('/buy_products')
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

    addProduct() {
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
      this.formDetails.subTotal = this.subTotal
      this.formDetails.product = this.selectedProduct
      const item = {
        subTotal: parseInt(this.formDetails.subTotal),
        product: this.selectedProduct,
        quantity: parseInt(this.formDetails.quantity),
        price: parseInt(this.formDetails.price),
      }
      this.dataItems.push(item)
      this.total = this.total + this.subTotal
      this.hasItem = true
      document.getElementById('autocomplete').focus()
    },
    selectProduct(value) {
      if (value == null) return
      this.autocomplete = null
      this.formDetails.price = value.price
      this.formDetails.quantity = 0
      this.subTotal = 0
      this.selectedProduct = value
    },
    selectProvider(value) {
      if (value == null) return
      this.provider = value
      this.formHeader.provider = this.provider.name
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
    async searchProvider(val) {
      if (val == null) return
      if (val.length < 2) return

      const providers = await this.$axios.$get(`/api/providers/${val}`)
      this.providers = providers.data
    },
  },
}
</script>

<style>
</style>