<template>
  <v-row>
    <v-col cols="12" offset-md="0" sm="3">
      <h2>{{ title }}</h2>
    </v-col>
    <v-col cols="12" sm="6" md="5">
      <v-text-field
        v-model="searchText"
        rounded
        single-line
        outlined
        filled
        dense
        :label="'Buscar ' + title"
        prepend-inner-icon="mdi-magnify"
        @keyup="search()"
        :loading="loading"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="3" offset-md="1" md="2">
      <v-btn color="primary" width="100%" @click="goToPage()">
        <v-icon class="mr-2">mdi-plus</v-icon>
        Agregar
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue'
import { debounce } from 'vue-debounce'

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    searchUrl: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    searchText: '',
    loading: false,
  }),
  methods: {
    goToPage() {
      this.$router.push(this.link)
    },
    async search() {
      this.loading = true
      clearTimeout(this.debounce)
      this.debounce = setTimeout(async () => {
        if (this.searchText.length == 0) {
          await this.$store.dispatch('sharedSearch', this.searchUrl + '0/10')
        } else {
          await this.$store.dispatch(
            'sharedSearch',
            this.searchUrl + this.searchText
          )
        }
        this.loading = false
      }, 600)
    },
  },
}
</script>

<style>
</style>