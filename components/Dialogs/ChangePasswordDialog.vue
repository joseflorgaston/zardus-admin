<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary header">
      Cambiar Contraseña
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog()">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>
    <v-form v-model="isValid" class="mt-5">
      <v-row style="width: 100%">
        <v-col offset="1" cols="10">
          <h3>Contraseña Actual</h3>
          <v-text-field
            label="Contraseña actual"
            outlined
            type="password"
            color="primary"
            v-model="form.currentPassword"
            :rules="rules"
          ></v-text-field>
        </v-col>
        <v-col offset="1" cols="10">
          <h3>Nueva Contraseña</h3>
          <v-text-field
            label="Nueva contraseña"
            outlined
            color="primary"
            type="password"
            v-model="form.newPassword"
            :rules="rules"
          ></v-text-field>
        </v-col>
        <v-col offset="1" cols="10">
          <h3>Vuelva a escribir la contraseña</h3>
          <v-text-field
            label="Vuelva a escribir su contraseña"
            outlined
            color="primary"
            type="password"
            v-model="form.repeatPassword"
            :rules="[
              rules[0],
              (v) => v == form.newPassword || 'Las contrasenas no coinciden',
            ]"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        :disabled="!isValid"
        @click="changePassword()"
        width="150"
        >Guardar</v-btn
      >
      <v-btn @click="closeDialog()" width="150">Cancelar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    isValid: false,
    rules: [(v) => !!v || 'Este campo es requerido'],
    form: {
      currentPassword: '',
      newPassword: '',
      repeatPassword: '',
    },
  }),
  methods: {
    async changePassword() {
      try {
        this.$store.commit('setLoading')
        await this.$axios.$post('/api/auth/changePassword/' + this.$auth.$storage.getLocalStorage('user').userName, this.form)
        this.$store.commit(
          'setSuccess',
          'La contrasena ha sido modificada exitosamente'
        )
        this.form = {};
        this.closeDialog();
      } catch (error) {
        this.$store.commit(
          'setError',
          'Ha ocurrido un error, vuelva a intentarlo mas tarde'
        )
      } finally {
        this.$store.commit('setLoading')
      }
    },
    closeDialog() {
      this.$emit('closeDialog')
    },
  },
}
</script>

<style>
</style>