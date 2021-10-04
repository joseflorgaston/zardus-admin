<template>
  <v-card width="400px" height="350px">
    <v-card-text class="text-center d-flex justify-space-between">
      {{ title }}
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="white"
            style="background: #64bb8d"
            icon
            height="25"
            v-bind="attrs"
            v-on="on"
            width="25"
            @click="changeCondition"
          >
            <v-icon> mdi-sync </v-icon>
          </v-btn>
        </template>
        <span>Cambiar a {{ getNext() }}</span>
      </v-tooltip>
    </v-card-text>
    <div class="text-center">
      <center>
        <h3>{{ getTitle() }}</h3>
      </center>
    </div>
    <div class="pl-5 ma-3" style="width: 83%; height: 55%">
      <canvas
        :id="chartId"
        @change="putNewValues()"
        style="width: 100%; height: 100% !important"
      ></canvas>
    </div>
  </v-card>
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

  props: {
    chartId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    chartValues: {
      type: Object,
      default: {
        headers: {
          monthly: [],
        },
        values: [
          {
            monthly: [],
          },
          {
            monthly: [],
          },
        ],
      },
    },
    loading: {
      type: Boolean,
      default: true,
    },
    label: {
      type: [],
      default: '',
    },
    colors: {
      type: [],
    },
  },

  watch: {
    chartValues: function () {
      this.barChart.update
    },
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

  data() {
    return {
      barChart: {},
      text: 'Ultimos 30 dias',
    }
  },

  mounted() {
    console.log(this.chartValues)
    const ctx = document.getElementById(this.chartId).getContext('2d')
    var datasets = []
    for (let index = 0; index < this.chartValues.values.length; index++) {
      datasets.push({
        label: `${this.label[index]}`,
        data: this.chartValues.values[index].monthly,
        backgroundColor: this.colors[index],
        borderColor: ['#0C2334'],
        borderWidth: 0,
      })
    }
    this.barChart = new Chart(ctx, {
      type: 'bar',
      scale: 'scale',
      data: {
        labels: this.chartValues.headers.monthly,
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
  },

  methods: {
    getTitle() {
      dayjs.locale('es')
      var date = new Date()
      if (this.text === 'Ultimos 30 dias') {
        return 'Ultimos 30 dias'
      } else if (this.text === 'Diario') {
        return dayjs(date).locale('es-py').format('dddd-DD-MM').toUpperCase()
      } else if (this.text === 'Ultimos 7 dias') {
        return 'Ultimos 7 dias'
      }
    },
    myEventHandler(e) {
      console.log(e)
      this.barChart.update()
    },
    getNext() {
      if (this.text === 'Ultimos 30 dias') {
        return 'Diario'
      }
      if (this.text === 'Diario') {
        return 'Ultimos 7 dias'
      }
      if (this.text === 'Ultimos 7 dias') {
        return 'Ultimos 30 dias'
      }
    },
    changeCondition() {
      if (this.text === 'Diario') {
        this.text = 'Ultimos 7 dias'
        var datasets = []
        for (let index = 0; index < this.chartValues.values.length; index++) {
          datasets.push({
            label: `${this.label[index]}`,
            data: this.chartValues.values[index].weekly,
            backgroundColor: this.colors[index],
            borderColor: ['#0C2334'],
            borderWidth: 0,
          })
        }
        this.barChart.data.labels = this.chartValues.headers.weekly
        this.barChart.data.datasets = datasets
        this.barChart.update()
      } else if (this.text === 'Ultimos 7 dias') {
        this.text = 'Ultimos 30 dias'
        this.barChart.data.labels = this.chartValues.headers.monthly
        var datasets = []
        for (let index = 0; index < this.chartValues.values.length; index++) {
          datasets.push({
            label: `${this.label[index]}`,
            data: this.chartValues.values[index].monthly,
            backgroundColor: this.colors[index],
            borderColor: ['#0C2334'],
            borderWidth: 0,
          })
        }
        this.barChart.data.datasets = datasets
        this.barChart.update()
      } else if (this.text === 'Ultimos 30 dias') {
        this.text = 'Diario'
        this.barChart.data.labels = this.chartValues.headers.daily
        var datasets = []
        for (let index = 0; index < this.chartValues.values.length; index++) {
          datasets.push({
            label: `${this.label[index]}`,
            data: this.chartValues.values[index].daily,
            backgroundColor: this.colors[index],
            borderColor: ['#0C2334'],
            borderWidth: 0,
          })
        }
        this.barChart.update()
      }
    },
    putNewValues(event) {
      console.log(event)
    },
  },
})
</script>

<style>
</style>