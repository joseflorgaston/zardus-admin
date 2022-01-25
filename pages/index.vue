<template></template>

<script>
export default {
  auth: true,
  beforeMount() {
    if (!this.$auth.loggedIn) {
      return this.$router.push('/login')
    }
    this.$router.push('/products')
  },
}
</script>

<style>
</style>