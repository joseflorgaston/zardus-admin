<template>
  <div>
    <shared-header title="Gastos Varios"></shared-header>
    <v-card>
      <v-data-table> </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  auth: true,
  data: () => ({
    items: {},
  }),
  async beforeMount() {},

  methods: {
    async getExpenses() {},
  },
}
</script>

<style>
</style>