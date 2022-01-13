<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary">
      Registrar usuario
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>

    <v-form v-model="isValid">
      <v-row class="mt-5 max-width mb-5">
        <v-col offset="1" cols="10" sm="10">
          <h4>Usuario.</h4>
          <v-text-field
            color="accent"
            label="Nombre de usuario"
            v-model="form.userName"
            :rules="rules"
          >
          </v-text-field>
        </v-col>
        <v-col offset="1" cols="10" sm="6">
          <h4>Rol</h4>
          <v-select
            color="accent"
            label="Rol"
            v-model="form.roles"
            :items="roles"
            :rules="rules"
          >
          </v-select>
        </v-col>
        <v-col offset="1" offset-sm="0" cols="10" sm="4">
          <h4>Email</h4>
          <v-text-field
            color="accent"
            label="Email"
            v-model="form.email"
          >
          </v-text-field>
        </v-col>
        <v-col offset="1" cols="10" sm="4">
          <h4>Contraseña</h4>
          <v-text-field
            color="accent"
            label="Contraseña"
            type="password"
            v-model="form.password"
            :rules="rules"
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
    form: {
      userName: '',
      roles: '',
      email: '',
    },
    roles: ['user', 'admin'],
  }),
  methods: {
    closeDialog() {
      this.form = {}
      this.$store.commit('setDialog')
    },
    async save() {
      this.form.roles = [this.form.roles]
      console.log(this.form)
      this.$store.commit('setLoading')
      await this.$axios.post('/api/auth/signup', this.form);
      this.closeDialog()
      await this.$store.dispatch('getUsers', { page: 1, itemsPerPage: 10 })
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