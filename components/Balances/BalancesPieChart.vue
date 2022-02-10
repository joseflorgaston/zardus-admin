<template>
  <v-card width="400px" height="400px" class="pb-5">
    <div class="text-center pt-5">
      <h2>{{ this.title }}</h2>
    </div>
    <div :id="id" v-show="process.browser">
      <!--<apex-charts
        class="ma-6"
        width="380px"
        :options="chartOptions"
        :series="values"
      ></apex-charts> -->
    </div>
  </v-card>
</template>

<script>
// import ApexCharts from 'vue-apexcharts'
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    values: {
      type: Array,
      required: true,
    },
  },
  components: {  },
  data: () => ({
    series: [],
    chartOptions: {
      chart: {
        width: 400,
        type: 'pie',
        animations: {
          enabled: true,
          easing: 'easeout',
          speed: 700,
          animateGradually: {
            enabled: false,
            delay: 350,
          },
          dynamicAnimation: {
            enabled: false,
            speed: 350,
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        },
      },
      colors: ['#64BB8D', '#0C2334'],
      dataLabels: {
        enabled: false,
      },
      labels: ['Activos', 'Inactivos'],
      legend: {
        position: 'top',
      },
    },
  }),
}
</script>

<style>
.align-middle {
  align-items: center;
}
</style>