<template>
  <div class="d-flex flex-wrap">
    <div class="col-12 col-sm-3 col-md-2">
      <h2>Productos</h2>
    </div>
    <div class="col-12 col-sm-9 col-md-4 col-lg-6">
      <v-text-field
        v-model="searchText"
        rounded
        single-line
        outlined
        filled
        dense
        :label="'Buscar ' + title"
        prepend-inner-icon="mdi-magnify"
        @keyup="getProducts($event)"
        :loading="loading"
      ></v-text-field>
    </div>
    <div class="col-6 col-md-3 col-lg-2">
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