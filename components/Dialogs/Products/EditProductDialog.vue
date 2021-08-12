<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary">
      Editar Producto
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>

    <v-form>
      <v-row class="mt-5 max-width mb-5">
        <v-col offset="1" cols="10" sm="10">
          <v-text-field color="accent" label="Nombre" v-model="editItem.name">
          </v-text-field>
        </v-col>
        <v-col offset="1" cols="10" sm="6">
          <v-combobox
            color="accent"
            label="Categoria"
            v-model="editItem.category"
            :items="categories"
          >
          </v-combobox>
        </v-col>
        <v-col offset="1" offset-sm="0" cols="10" sm="4">
          <v-text-field color="accent" type="number" label="Precio" v-model="editItem.price">
          </v-text-field>
        </v-col>
        <v-col offset="1" cols="10" sm="10">
          <v-text-field
            multi-line
            color="accent"
            label="Observacion"
            v-model="editItem.observation"
          >
          </v-text-field>
        </v-col>
      </v-row>
    </v-form>
    <v-divider></v-divider>

    <v-card-actions>
      <v-btn color="error" @click="openDeleteDialog"> Eliminar Producto </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="closeDialog"> Guardar </v-btn>
      <v-btn text @click="closeDialog"> Cancelar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
      editItem: {
          type: Object,
          required: true
      }
  },
  computed: {
    
  },
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
      this.$store.commit('setEditDialog')
    },
    openDeleteDialog() {
        this.$store.commit("setDeleteDialog");
    }
  },
}
</script>

<style>
.max-width {
  width: 100%;
}
</style>