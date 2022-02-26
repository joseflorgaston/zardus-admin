<template>
  <div>
    <v-card width="400px" height="350px" v-show="loading">
      <div
        class="d-flex flex-wrap align-center justify-center"
        style="width: 100%; height: 100%"
      >
        <v-progress-circular color="primary" indeterminate size="50">
        </v-progress-circular>
      </div>
    </v-card>
    <v-card width="400px" height="350px" v-show="!loading">
      <v-card-text class="text-center d-flex justify-space-between">
        {{ title }}
        <div style="width: 40%; height: 40px">
          <v-select
            v-model="range"
            :items="ranges"
            label="Cambiar rango"
            dense
            @change="getStatistics"
          ></v-select>
        </div>
      </v-card-text>
      <div class="text-center">
        <h3>{{ text }}</h3>
      </div>
      <div class="d-flex flex-wrap justify-center">
        <shared-money
          :amount="totalProfits"
          class="pr-1 subtitle-2 success--text"
        ></shared-money>
        /
        <shared-money
          :amount="totalExpenses"
          class="pl-1 subtitle-2 error--text"
        ></shared-money>
      </div>
      <div class="pl-5 ma-3" style="width: 83%; height: 55%">
        <canvas
          :id="chartId"
          @change="putNewValues()"
          style="width: 100%; height: 100% !important"
        ></canvas>
      </div>
    </v-card>
  </div>
</template>

<script>
import Vue, { PropType } from 'vue'
import Chart from 'chart.js/auto'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
export default Vue.extend({
  components: {
    Vue,
    Chart,
  },

  props: {},
  data: () => ({
    barChart: {},
    totalProfits: 0,
    totalExpenses: 0,
    range: 'Mes',
    ranges: ['Hoy', 'Semana', 'Mes', 'Total'],
    title: 'Total Transacciones',
    chartId: 'balanceStatistic',
    text: 'Ultimos 30 dias',
    loading: true,
  }),

  watch: {
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 220
        case 'sm':
          return 400
        case 'md':
          return 500
        case 'lg':
          return 600
        case 'xl':
          return 800
      }
    },
  },

  async mounted() {
    await this.getMonthlyStatistic()
  },

  methods: {
    setDataSets(length, label, data, color, headers) {
      const ctx = document.getElementById(this.chartId).getContext('2d')
      var datasets = []
      for (let index = 0; index < length; index++) {
        datasets.push({
          label: `${label[index]}`,
          data: data[index],
          backgroundColor: color[index],
          borderColor: ['#0C2334'],
          borderWidth: 0,
        })
      }
      this.barChart = new Chart(ctx, {
        type: 'bar',
        scale: 'scale',
        data: {
          labels: headers,
          datasets: datasets,
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      })
      this.barChart.update()
    },
    async getStatistics() {
      this.barChart.destroy()
      this.loading = true
      if (this.range == this.ranges[0]) {
        return await this.getDailyStatistic()
      }
      if (this.range == this.ranges[1]) {
        return await this.getWeeklyStatistic()
      }
      if (this.range == this.ranges[2]) {
        return await this.getMonthlyStatistic()
      }
      return this.getTotalStatistic()
    },
    async getDailyStatistic() {
      try {
        let date = new Date()
        this.text = dayjs(date)
          .locale('es-py')
          .format('dddd-DD-MM')
          .toUpperCase()
        const statistic = await this.$axios.$get('/api/balance/statistics', {
          params: {
            type: 'Daily',
          },
        })
        this.totalExpenses = statistic.expenses
        this.totalProfits = statistic.profits
        this.setDataSets(
          2,
          ['Ganancias', 'Gastos'],
          [[statistic.profits], [statistic.expenses]],
          ['#00E676', '#DD2C00'],
          [this.text]
        )
      } catch (error) {
      } finally {
        this.loading = false
      }
    },
    async getTotalStatistic() {
      try {
        const statistic = await this.$axios.$get('/api/balance/statistics', {
          params: {
            type: 'Total',
          },
        })
        this.totalExpenses = statistic.expenses
        this.totalProfits = statistic.profits
        this.setDataSets(
          2,
          ['Ganancias', 'Gastos'],
          [[statistic.profits], [statistic.expenses]],
          ['#00E676', '#DD2C00'],
          ["Total"]
        )
      } catch (error) {
      } finally {
        this.loading = false
      }
    },
    async getWeeklyStatistic() {
      try {
        const statistic = await this.$axios.$get('/api/balance/statistics', {
          params: {
            type: 'Weekly',
          },
        })
        this.totalExpenses = statistic.expenses.total
        this.totalProfits = statistic.profits.total
        this.setDataSets(
          2,
          ['Ganancias', 'Gastos'],
          [statistic.profits.values, statistic.expenses.values],
          ['#00E676', '#DD2C00'],
          ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6', 'Dia 7']
        )
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    async getMonthlyStatistic() {
      try {
        const statistic = await this.$axios.$get('/api/balance/statistics', {
          params: {
            type: 'Monthly',
          },
        })
        console.log(statistic.expenses.values)
        this.totalExpenses = statistic.expenses.total
        this.totalProfits = statistic.profits.total
        this.setDataSets(
          2,
          ['Ganancias', 'Gastos'],
          [statistic.profits.values, statistic.expenses.values],
          ['#00E676', '#DD2C00'],
          ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4']
        )
        this.loading = false
      } catch (error) {
      } finally {
        this.loading = false
      }
    },
  },
})
</script>

<style>
</style>