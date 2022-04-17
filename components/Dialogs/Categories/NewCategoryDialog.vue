<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary">
      Agregar Proveedor
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>

    <v-form v-model="isValid">
      <v-row class="mt-5 max-width mb-5">
        <v-col offset="1" cols="10" sm="6">
          <h4>Nombre</h4>
          <v-text-field
            color="accent"
            label="Nombre"
            v-model="form.name"
            :rules="rules"
            name="name"
          >
          </v-text-field>
        </v-col>
        <v-col offset="1" offset-sm="0" cols="10" sm="4">
          <h4>Contacto</h4>
          <v-text-field color="accent" label="Contacto" v-model="form.contact" name="contact">
          </v-text-field>
        </v-col>
        <v-col offset="1" cols="10" sm="10">
          <h4>Direccion</h4>
          <v-text-field color="accent" label="Direccion" v-model="form.address" name="address">
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
    form: {
      name: '',
      address: '',
      contact: '',
    },
  }),
  methods: {
    closeDialog() {
      this.$store.commit('setDialog');
      this.resetForm();
    },
    async save() {
      this.$store.commit('setLoading')
      await this.$store.dispatch('saveProvider', this.form)
      this.closeDialog()
      await this.$store.dispatch('getProviders', { page: 1, itemsPerPage: 10 })
      this.$store.commit('setLoading')
    },
    resetForm() {
      this.form = {
        name: '',
        address: '',
        contact: '',
      }
    },
  },
}
</script>

<style>
.max-width {
  width: 100%;
}
</style>