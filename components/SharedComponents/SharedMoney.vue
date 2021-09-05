<template>
  <div>
      {{formattedAmount}}
  </div>
</template>

<script>

export default {
    props: {
        amount: {
            type: Number,
            required: true,
        }
    },
    computed: {
        formattedAmount() {
            return this.formatMiles(parseInt(this.amount));
        }
    },
    methods: {
        formatMiles(val) {
            return 'Gs. ' + val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        }
    }
}
</script>

<style>

</style>