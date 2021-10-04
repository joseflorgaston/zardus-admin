<template>
  <div>
    <shared-header title="Balances"></shared-header>
    <v-row>
      <v-col cols="6">
        <shared-loading-card v-if="loading" />
        <balances-statistics-card
          v-else
          title="TOTAL TRANSACCIONES"
          chartId="chart1"
          :loading="loading"
          :chartValues="transactionsQuantity"
          :label="labels"
          :colors="colors"
        />
      </v-col>
      <v-col cols="6">
        <shared-loading-card v-if="loading" />
        <!--<balances-pie-chart
          v-else
          title="Comercios Activos"
          :values="activeBusinesses"
          id="activeBusiness"
        ></balances-pie-chart> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BalancesPieChart from '~/components/Balances/BalancesPieChart.vue'
export default {
  components: { BalancesPieChart },
  data: () => ({
    loading: false,
    labels: ['Ganancias', 'Gastos'],
    colors: ["#00E676", "#DD2C00"],
    transactionsQuantity: {
      headers: {
        monthly: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
        daily: ['Hoy'],
        weekly: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
      },
      values: [
        {
          monthly: ['4760000', '3890000', '8540000', '12221000'],
          daily: ['274000'],
          weekly: ['440000', '165000', '252000', '460000', '276250', '301700', '274000'],
        },
        {
          monthly: ['1142000', '1860000', '758250', '7967000'],
          daily: ['128000',],
          weekly: ['140000', '132000', '336000', '68000', '14450', '32740', '128000'],
        },
      ],
    },
    activeBusinesses: [0, 1],
  }),
  async beforeMount() {
    this.loading = true
    await setTimeout(1000);
    this.loading = false
  }
}
</script>

<style>
</style>