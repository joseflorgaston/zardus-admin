<template>
  <div class="d-flex flex-wrap justify-space-between">
    <div class="col-12 col-sm-auto">
      <h2>Merma de productos</h2>
    </div>
    <div class="col-12 col-sm-auto">
      <v-btn color="primary" width="100%" max-width="250" @click="goToPage()">
        <v-icon class="mr-2">mdi-plus</v-icon>
        Agregar
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
        type: String,
        required: true
    }
  },
  data: () => ({
    searchText: '',
    loading: false
  }),
  methods: {
    goToPage() {
      this.$router.push(this.link)
    },
  },
}
</script>

<style>
</style>