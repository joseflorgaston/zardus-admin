<template>
  <v-row class="mb-2">
    <v-col cols="12" sm="3" :md="!hasButton ? 3 : 2">
      <h2>{{ title }}</h2>
    </v-col>
    <v-col cols="12" :md="!hasButton ? 4 : 3">
      <v-menu
        ref="menu"
        v-model="menu"
        :return-value.sync="computedDateFormattedMomentjs"
        :close-on-content-click="false"
        transition="scale-transition"
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-combobox
            placeholder="Selecciona un rango de fechas"
            v-model="computedDateFormattedMomentjs"
            color="primary"
            prepend-inner-icon="mdi-calendar"
            readonly
            rounded
            single-line
            outlined
            filled
            dense
            v-bind="attrs"
            v-on="on"
          ></v-combobox>
        </template>
        <v-date-picker v-model="dates" range :max="today">
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false"> Cancelar </v-btn>
          <v-btn
            :disabled="dates.length < 2"
            text
            color="primary"
            @click="search()"
          >
            Filtrar
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="12" :md="!hasButton ? 4 : 3">
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
    <v-col cols="12" sm="3" offset-md="1" md="2" v-show="hasButton">
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
import moment from 'moment'
import { format, parseISO } from 'date-fns'

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
    hasButton: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    computedDateFormattedMomentjs: {
      get() {
        if (this.dates.length == 0) return ''
        return this.dates[0] + this.dates[1]
          ? moment(this.dates[0]).locale('es_py').format('DD/MM/yyyy') +
              '-' +
              moment(this.dates[1]).locale('es_py').format('DD/MM/yyyy')
          : ''
      },
      set(value) {
        return this.dates[0] + this.dates[1]
          ? moment(this.dates[0]).locale('es_py').format('DD/MM/yyyy') +
              '-' +
              moment(this.dates[1]).locale('es_py').format('DD/MM/yyyy')
          : ''
      },
    },
    todayStandard: {
      get() {
        return moment(Date).locale('es_py').format('yyyy-MM-DD')
      },
    },
  },
  data: () => ({
    menu: false,
    dates: [],
    searchText: '',
    loading: false,
    today: moment(new Date()).locale('es_py').format('dddd, DD MMMM, yyyy'),
  }),
  methods: {
    goToPage() {
      this.$router.push(this.link)
    },
    async search() {
      this.checkDates()
      this.setSearchText()
      this.loading = true
      clearTimeout(this.debounce)
      this.debounce = setTimeout(async () => {
        this.$store.commit('setLoading')
        await this.$store.dispatch('sharedSearch', {
          pagination: {
            page: 1,
            itemsPerPage: 10,
          },
          searchUrl: this.searchUrl,
          searchText: this.$store.state.searchText,
          dates: this.$store.state.filterDates,
        })
        this.loading = false
        this.$store.commit('setLoading')
      }, 400)
    },
    checkDates() {
      if (this.dates.length == 0) return

      if (this.dates[0] > this.dates[1]) {
        const greaterDate = this.dates[0]
        this.dates[0] = this.dates[1]
        this.dates[1] = greaterDate
      }
      this.menu = false

      this.$store.commit('setFilterDates', this.dates)
    },
    setSearchText() {
      this.$store.commit('setSearchText', this.searchText)
    },
  },
}
</script>

<style>
</style>