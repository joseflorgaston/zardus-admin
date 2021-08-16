<template>
  <v-snackbar v-model="snackbar" timeout="4000" :color="snackbarColor">
    {{ message }}
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    snackbar: {
      get() {
        return this.$store.state.snackbar
      },
      set(value) {
        return this.$store.commit('closeSnackbar')
      },
    },
    snackbarColor () {
        return this.$store.state.snackbarColor;
    },
    message() {
      return this.$store.state.message
    },
  },
}
</script>

<style>
</style>