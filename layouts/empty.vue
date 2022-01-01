<template>
  <v-app>
    <v-main>
      <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "empty",
  computed: {
    error() {
      return this.$store.state.error
    },
    success() {
      return this.$store.state.success
    },
    msg() {
      return this.$store.state.msg
    }
  }
}
</script>

<style scoped>

</style>
