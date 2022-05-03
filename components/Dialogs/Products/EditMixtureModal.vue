<template>
  <v-card width="800" max-width="100%">
    <v-card-title class="text-h5 white--text primary header">
      Editar Mezcla
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog()">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>

    <v-form v-model="isValid">
      <v-row class="pa-0 ma-4">
        <v-col offset="1" offset-sm="0" cols="10" sm="10" md="4">
          <h4>Producto.</h4>
          <v-text-field
            color="accent"
            label="Nombre"
            v-model="editItem.name"
            :rules="rules"
            name="name"
          >
          </v-text-field>
        </v-col>
        <v-col offset="1" offset-sm="0" cols="10" sm="6" md="4">
          <h4>Categoría.</h4>
          <v-autocomplete
            color="accent"
            label="Categoria"
            v-model="editItem.category"
            :items="categories"
            :rules="rules"
          >
          </v-autocomplete>
        </v-col>
        <v-col offset="1" offset-sm="0" cols="10" sm="4" md="4">
          <h4>Precio</h4>
          <v-text-field
            type="number"
            color="accent"
            label="Precio"
            v-model="editItem.price"
            :rules="rules"
            name="price"
          >
          </v-text-field>
        </v-col>
        <v-col offset="1" offset-sm="0" cols="5" sm="5" md="4">
          <h4>Unidad de medida.</h4>
          <v-select
            v-model="editItem.unitOfMeasure"
            label="Unidad de medida"
            :items="['unidades', 'gramos']"
            :rules="rules"
          ></v-select>
        </v-col>
        <v-col offset="1" offset-sm="0" cols="5" sm="5" md="4">
          <h4>Cantidad en stock. ({{ editItem.unitOfMeasure }})</h4>
          <v-text-field
            type="number"
            color="accent"
            label="Stock"
            v-model="editItem.stock"
            :rules="quantityRules"
            name="stock"
          >
          </v-text-field>
        </v-col>
        <v-col offset="1" offset-sm="0" cols="5" sm="5" md="4">
          <h4>Cantidad por ingredientes. ({{ editItem.unitOfMeasure }})</h4>
          <v-text-field
            type="number"
            color="accent"
            label="Cantidad por ingredientes"
            v-model="editItem.quantityPerIngredients"
            :rules="quantityRules"
            name="quantity"
          >
          </v-text-field>
        </v-col>
        <div style="width: 100%">
          <center><h3>Añadir Ingrediente</h3></center>
        </div>
        <v-col cols="12">
          <v-divider color="primary" />
        </v-col>
      </v-row>
    </v-form>
    <v-form v-model="validIngredient">
      <v-container class="pt-0 mt-0">
        <div class="d-flex flex-wrap align-center">
          <div class="col-12 col-sm-6 col-md-4">
            <v-autocomplete
              v-model="product"
              :rules="rules"
              :items="products"
              item-text="name"
              placeholder="Producto"
              :search-input.sync="searchProducts"
              return-object
            >
            </v-autocomplete>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <v-text-field
              type="number"
              v-model="productQuantity"
              :label="'Cantidad (' + product.unitOfMeasure + ')'"
              :rules="quantityRules"
              name="productQuantity"
            >
            </v-text-field>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <v-btn
              @click="addToIngredients()"
              color="success"
              :disabled="!validIngredient"
              >Añadir ingrendiente.</v-btn
            >
          </div>
          <div class="col-12">
            <v-divider color="primary" />
          </div>
        </div>
      </v-container>
    </v-form>
    <center>
      <h3>Ingredientes:</h3>
    </center>
    <div
      class="d-flex justify-center"
      v-for="(ingredient, i) in editItem.ingredients"
      :key="i"
    >
      <div class="black--text">{{ ingredient.name }}</div>
      <div class="mx-3">-</div>
      <div class="black--text">
        {{ ingredient.quantity }} {{ ingredient.unitOfMeasure }}
        <v-btn
          x-small
          icon
          color="red"
          @click="removeIngredient(i)"
          title="Borrar ingrediente"
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </div>
    </div>
    <v-card-actions class="d-flex flex-wrap">
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        @click="save()"
        :disabled="editItem.ingredients.length == 0 || !isValid"
        >Guardar</v-btn
      >
      <v-btn @click="closeDialog()">Cancelar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    editItem: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    form: {},
    product: '',
    validIngredient: false,
    products: [],
    productQuantity: '0',
    ingredients: [],
    searchProducts: null,
    categories: [
      'Especias',
      'Hierbas',
      'Semillas',
      'Frutos Secos',
      'Deshidratados',
      'Aditivos',
      'Legumbres',
      'Harinas',
      'Empaquetados',
    ],
    isValid: true,
    rules: [(v) => !!v || 'Este campo es requerido'],
    quantityRules: [
      (v) => v > -1 || 'Este campo no puede ser negativo',
      (v) => !!v || 'Este campo es requerido',
    ],
  }),
  watch: {
    async searchProducts(val) {
      try {
        if (val == null) return
        if (val.length < 2) return

        const product = await this.$axios.$get(`/api/allProducts/${val}`)
        this.products = product.data
      } catch (error) {
        console.log(error)
      }
    },
  },
  methods: {
    closeDialog() {
      this.$store.commit('setEditDialog')
    },

    removeIngredient(i) {
      this.editItem.ingredients.splice(i, 1)
      let item = this.editItem
      this.editItem = {}
      this.editItem = item
    },

    validateStock() {
      /*if (this.productQuantity > this.product.stock) {
        alert(
          'La cantidad ingresada supera al stock del producto (' +
            this.product.stock +
            ')'
        )
        return false
      }*/

      const isOnIngredients = this.editItem.ingredients.filter(
        (x) => x.name == this.product.name
      )
      if (isOnIngredients.length > 0) {
        alert('El producto ya se agrego a los ingredientes')
        return false
      }
      return true
    },
    addToIngredients() {
      if (!this.validateStock()) {
        return
      }

      const newIngredient = {
        _id: this.product._id,
        name: this.product.name,
        quantity: this.productQuantity,
        unitOfMeasure: this.product.unitOfMeasure,
        category: this.product.category,
      }
      this.editItem.ingredients.push(newIngredient)
      let newIngredients = this.editItem
      this.editItem = {}
      this.editItem = newIngredients
    },

    async save() {
      try {
        if (this.editItem.ingredients.length < 2) {
          alert('Coloca al menos dos ingredientes para editar la mezcla')
          return
        }
        this.$store.commit('setLoading')
        let mixture = this.form
        mixture.ingredients = this.editItem.ingredients
        mixture.price = parseInt(mixture.price)
        mixture.stock = parseInt(mixture.stock)
        mixture.quantityPerIngredients = parseInt(
          mixture.quantityPerIngredients
        )
        await this.$axios.put(
          '/api/mixture/update/' + this.editItem._id,
          this.editItem
        )
        this.$store.commit('setEditDialog')
        this.$store.commit('setSuccess', 'Mezcla editada exitosamente')
        await this.$store.dispatch('getMixtures', { page: 1, itemsPerPage: 10 })
        this.$store.commit('setLoading')
      } catch (error) {
        console.log(error)
        this.$store.commit('setError', error.toString())
      }
    },
  },
}
</script>

<style>
</style>