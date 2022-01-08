<template>
  <div class="d-flex flex-wrap">
    <div class="col-12 col-sm-3 col-md-5">
      <h2>Historial de pedidos</h2>
    </div>
    <div class="col-12 col-sm-9 col-md-7 col-lg-6">
      <v-text-field
        v-model="searchText"
        rounded
        single-line
        outlined
        filled
        dense
        :label="'Buscar ' + title"
        prepend-inner-icon="mdi-magnify"
        @keyup="getHistoryOrders($event)"
        :loading="loading"
      ></v-text-field>
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
    loading: false,
  }),
  methods: {
    async getHistoryOrders() {
      this.loading = true
      clearTimeout(this.debounce)
      this.debounce = setTimeout(async () => {
        if (this.searchText.length == 0) {
          await this.$store.dispatch('sharedSearch', '/api/orders/history/0/10')
        } else {
          await this.$store.dispatch('sharedSearch', '/api/orders/history/search/' + this.searchText)
        }
        this.loading = false
      }, 600)
    },
  },
}
</script>

<style>
</style>