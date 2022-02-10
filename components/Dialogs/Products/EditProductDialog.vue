<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary">
      Editar Producto
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>

    <v-form v-model="isValid">
      <v-row class="mt-5 max-width mb-5">
        <v-col offset="1" cols="10" sm="10">
          <h4>Nombre.</h4>
          <v-text-field
            color="accent"
            label="Nombre"
            v-model="editItem.name"
            :rules="rules"
          >
          </v-text-field>
        </v-col>
        <v-col offset="1" cols="10" sm="6">
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
        <v-col offset="1" offset-sm="0" cols="10" sm="4">
          <h4>Precio. ({{ editItem.unitOfMeasure }})</h4>
          <v-text-field
            color="accent"
            type="number"
            label="Precio"
            v-model="editItem.price"
            :rules="priceRules"
          >
          </v-text-field>
        </v-col>
        <v-col offset="1" cols="10" sm="5">
          <h4>Unidad de medida.</h4>
          <v-select
            v-model="editItem.unitOfMeasure"
            label="Unidad de medida"
            :items="['unidades', 'gramos']"
            :rules="rules"
          ></v-select>
        </v-col>
        <v-col offset="1" offset-sm="0" cols="5" sm="5">
          <h4>Cantidad en stock. ({{ editItem.unitOfMeasure }})</h4>
          <v-text-field
            type="number"
            color="accent"
            label="Stock"
            :rules="priceRules"
            v-model="editItem.stock"
          >
          </v-text-field>
        </v-col>
      </v-row>
    </v-form>
    <v-divider></v-divider>

    <v-card-actions class="d-flex flex-wrap">
      <v-btn color="error" @click="openDeleteDialog">
        Eliminar Producto
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="save()" :disabled="!isValid"> Guardar </v-btn>
      <v-btn text @click="closeDialog()"> Cancelar </v-btn>
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
  computed: {},
  data: () => ({
    isValid: true,
    rules: [(v) => !!v || 'Este campo es requerido'],
    priceRules: [
      (v) => !!v || 'Este campo es requerido',
      (v) => v >= 0 || 'Este campo debe ser mayor a 0'
      ],
    form: {
      name: '',
      category: '',
      price: '',
      unitOfMeasure: null,
      stock: null,
    },
    categories: [
      'Especias',
      'Hierbas',
      'Semillas',
      'Frutos Secos',
      'Deshidratados',
    ],
  }),
  methods: {
    async save() {
      this.form = {
        _id: this.editItem._id,
        name: this.editItem.name,
        stock: this.editItem.stock,
        price: parseInt(this.editItem.price),
        category: this.editItem.category,
        unitOfMeasure: this.editItem.unitOfMeasure,
      }
      if (this.form.unitOfMeasure != "gramos") {
        this.form.stock = parseInt(this.form.stock)
      } else {
        this.form.stock = parseFloat(this.form.stock).toFixed(3);
      }
      this.$store.commit('setLoading')
      await this.$store.dispatch('updateProduct', this.form)
      await this.$store.dispatch('getProducts', {
        page: 1,
        itemsPerPage: 10,
      })
      this.closeDialog()
      this.$store.commit('setLoading')
    },
    closeDialog() {
      this.$store.commit('setEditDialog')
    },
    openDeleteDialog() {
      this.$store.commit('setDeleteDialog')
    },
  },
}
</script>

<style>
.max-width {
  width: 100%;
}
</style>