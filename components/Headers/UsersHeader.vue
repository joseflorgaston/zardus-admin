<template>
  <div class="d-flex flex-wrap justify-space-between">
    <div>
      <h2>Usuarios</h2>
    </div>
    <div>
      <v-btn color="primary" width="100%" max-width="250" @click="openCreateDialog()">
        <v-icon class="mr-2">mdi-plus</v-icon>
        Agregar
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    hasSearchQuery: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    searchText: '',
    loading: false
  }),
  methods: {
    openCreateDialog() {
      this.$store.commit('setDialog')
    },
    async getProducts() {
      this.loading = true
      clearTimeout(this.debounce);
      this.debounce = setTimeout(async () => {
        await this.$store.dispatch("searchProducts", this.searchText);
        this.loading = false;
      }, 600)
    },
  },
}
</script>

<style>
</style>