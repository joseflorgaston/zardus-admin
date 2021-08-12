<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary">
      Agregar Producto
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>

    <v-form>
      <v-row class="mt-5 max-width mb-5">
        <v-col offset="1" cols="10" sm="10">
          <v-text-field color="accent" label="Nombre" v-model="form.name">
          </v-text-field>
        </v-col>
        <v-col offset="1" cols="10" sm="6">
          <v-combobox
            color="accent"
            label="Categoria"
            v-model="form.category"
            :items="categories"
          >
          </v-combobox>
        </v-col>
        <v-col offset="1" offset-sm="0" cols="10" sm="4">
          <v-text-field color="accent" label="Precio" v-model="form.price">
          </v-text-field>
        </v-col>
        <v-col offset="1" cols="10" sm="10">
          <v-textarea
            multi-line
            color="accent"
            label="Observacion"
            v-model="form.observation"
          >
          </v-textarea>
        </v-col>
      </v-row>
    </v-form>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="closeDialog"> Guardar </v-btn>
      <v-btn text @click="closeDialog"> Cancelar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    form: {
      name: '',
      category: '',
      price: '',
      observation: '',
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
    closeDialog() {
      this.$store.commit('setDialog')
    },
  },
}
</script>

<style>
.max-width {
  width: 100%;
}
</style>