<template>
  <v-card width="300">
    <center class="pt-3"><h2>¿Desea cerrar sesion?</h2></center>

    <v-card-actions class="d-flex justify-center pt-3">
      <v-btn color="primary" class="px-2 white--text" @click="closeDialog()">Cancelar</v-btn>
      <v-btn color="red" class="px-2 white--text" @click="logout()"
        >Cerrar sesion</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods: {
    async logout() {
      try {
        await this.$auth.logout()
        await this.$router.push({ path: '/login' })
      } catch (e) {
        console.log(e)
        this.$store.commit('setError', e.toString())
      }
    },
    closeDialog() {
        this.$emit('closeDialog');
    }
  },
}
</script>

<style>
</style>