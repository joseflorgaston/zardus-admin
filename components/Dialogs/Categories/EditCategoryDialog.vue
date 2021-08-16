<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary">
      Editar Proveedor
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>

    <v-form v-model="isValid">
      <v-row class="mt-5 max-width mb-5">
        <v-col offset="1" cols="10" sm="6">
          <v-text-field color="accent" label="Nombre" v-model="editItem.name" :rules="rules">
          </v-text-field>
        </v-col>
        <v-col offset="1" offset-sm="0" cols="10" sm="4">
          <v-text-field
            color="accent"
            label="Contacto"
            v-model="editItem.contact"
          >
          </v-text-field>
        </v-col>
        <v-col offset="1" cols="10" sm="10">
          <v-text-field
            color="accent"
            label="Direccion"
            v-model="editItem.address"
          >
          </v-text-field>
        </v-col>
      </v-row>
    </v-form>
    <v-divider></v-divider>

    <v-card-actions>
      <v-btn color="error" @click="openDeleteDialog">
        Eliminar Proveedor
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="updateProvider" :disabled="!isValid">
        Guardar
      </v-btn>
      <v-btn text @click="closeDialog"> Cancelar </v-btn>
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
    rules: [(v) => !!v || "Este campo es requerido"],
    form: {
      _id: '',
      name: '',
      address: '',
      contact: '',
    },
  }),
  methods: {
    closeDialog() {
      this.$store.commit('setEditDialog');
    },
    openDeleteDialog() {
      this.$store.commit('setDeleteDialog');
    },
    async updateProvider() {
      
      this.form = {
        _id: this.editItem._id,
        name: this.editItem.name,
        address: this.editItem.address,
        contact: this.editItem.contact
      }
      console.log(this.form);
      this.$store.commit('setLoading');
      await this.$store.dispatch('updateProvider', this.form);
      await this.$store.dispatch('getProviders', {
        page: 1,
        itemsPerPage: 10,
      });
      this.closeDialog();
      this.$store.commit('setLoading');
    },
  },
}
</script>

<style>
.max-width {
  width: 100%;
}
</style>