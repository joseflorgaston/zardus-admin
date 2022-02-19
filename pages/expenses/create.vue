<template>
  <v-container class="white">
    <v-form v-model="isValid">
      <div class="d-flex">
        <h2>Nuevo Gasto</h2>
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
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <h4>Producto</h4>
          <v-text-field></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <h4>Precio Gs.</h4>
          <v-text-field
            type="number"
            prepend-icon="mdi-currency-usd"
            :rules="quantityRules"
            @keyup="getSubTotal()"
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
            <h3>
              SubTotal: <shared-money :amount="parseInt(formDetails.price)" />
            </h3>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-divider class="primary my-5"></v-divider>
    <div class="d-flex mb-3 justify-space-between">
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
          <div class="d-flex mt-2 mr-5">
            <h3>
              Total: <shared-money :amount="parseInt(total)"></shared-money>
            </h3>
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
      console.log(this.$route.query._id)
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
      this.total = item.totalAmount
      for (let i = 0; i < item.details.length; i++) {
        const element = item.details[i]
        this.editItem.push(element)
      }
    },
    getSubTotal() {
      this.subTotal = this.formDetails.price
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
        totalAmount: this.total,
        provider: '',
        lowerCaseProvider: '',
        paymentMethod: 'Contado',
        total: this.total,
        details: this.dataItems,
        deliveryAddress: 'N/A',
        totalPayed: this.total,
        userName: this.$auth.$state.user.userName ?? '',
        type: 'Expense'
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
      this.subTotal = parseInt(this.formDetails.price)
      this.formDetails.subTotal = this.subTotal
      this.formDetails.product = this.selectedProduct
      const item = {
        subTotal: parseInt(this.formDetails.subTotal),
        product: this.selectedProduct,
        quantity: parseInt(this.formDetails.quantity),
        price: parseInt(this.formDetails.price),
      }
      this.dataItems.push(item)
      console.log(this.dataItems)
      this.total = this.total + this.subTotal
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