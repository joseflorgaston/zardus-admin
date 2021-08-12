<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary">
      Agregar Deposito
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
        <v-col offset="1" cols="10" sm="10">
          <v-text-field
            color="accent"
            label="Direccion"
            v-model="form.address"
          >
          </v-text-field>
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
      address: '',
    },
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