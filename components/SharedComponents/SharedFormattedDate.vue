<template>
  <div>
      {{formattedDate}}
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
    props: {
        date: {
            type: String,
            required: true,
        },
        hasHour: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        formattedDate() {
            if (this.hasHour) {
                return dayjs(this.date).format('DD/MM/YYYY HH:mm') + ' hs.';
            }
            return dayjs(this.date).format('DD/MM/YYYY');
        }
    }
}
</script>

<style>

</style>