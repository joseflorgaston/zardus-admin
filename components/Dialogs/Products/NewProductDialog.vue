<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary">
      Agregar Producto
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>

    <v-form v-model="isValid">
      <v-row class="mt-5 max-width mb-5">
        <v-col offset="1" cols="10" sm="10">
          <h4>Producto.</h4>
          <v-text-field
            color="accent"
            label="Nombre"
            v-model="form.name"
            :rules="rules"
          >
          </v-text-field>
        </v-col>
        <v-col offset="1" cols="10" sm="6">
          <h4>Categoría.</h4>
          <v-autocomplete
            color="accent"
            label="Categoria"
            v-model="form.category"
            :items="categories"
            :rules="rules"
          >
          </v-autocomplete>
        </v-col>
        <v-col offset="1" offset-sm="0" cols="10" sm="4">
          <h4>
            Precio. ({{ form.unitOfMeasure == 'gramos' ? 'Kg' : 'unidades' }})
          </h4>
          <v-text-field
            type="number"
            color="accent"
            label="Precio"
            v-model="form.price"
            :rules="quantityRule"
          >
          </v-text-field>
        </v-col>
        <v-col offset="1" offset-sm="1" cols="5" sm="5">
          <h4>Unidad de medida.</h4>
          <v-select
            v-model="form.unitOfMeasure"
            label="Unidad de medida"
            :items="['unidades', 'gramos']"
            :rules="rules"
          ></v-select>
        </v-col>
        <v-col offset="1" offset-sm="0" cols="5" sm="5">
          <h4>Cantidad en stock. ({{ form.unitOfMeasure }})</h4>
          <v-text-field
            type="number"
            color="accent"
            label="Stock"
            v-model="form.stock"
            :rules="quantityRule"
          >
          </v-text-field>
        </v-col>
      </v-row>
    </v-form>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="save" :disabled="!isValid">
        Guardar
      </v-btn>
      <v-btn text @click="closeDialog"> Cancelar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    isValid: true,
    rules: [(v) => !!v || 'Este campo es requerido'],
    quantityRule: [
      (v) => v >= 0 || 'Coloca un numero mayor a 0',
      (v) => !!v || 'Este campo es requerido',
    ],
    form: {
      name: '',
      category: '',
      price: 0,
      unitOfMeasure: 'unidades',
      stock: 0,
      type: 'Product',
    },
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
  }),
  methods: {
    closeDialog() {
      this.$store.commit('setDialog')
    },
    resetForm() {
      this.form = {
        name: '',
        category: '',
        price: 0,
        unitOfMeasure: 'gs',
        stock: 0,
        type: '',
      }
    },
    async save() {
      this.form.price = parseInt(this.form.price)
      this.form.stock = parseInt(this.form.stock)
      this.closeDialog()
      this.$store.commit('setLoading')
      await this.$store.dispatch('saveProduct', this.form)
      await this.$store.dispatch('getProducts', { page: 1, itemsPerPage: 10 })
      this.resetForm()
      this.$store.commit('setLoading')
    },
  },
}
</script>

<style>
.max-width {
  width: 100%;
}
</style>