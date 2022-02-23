<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary">
      ¿Eliminar Gasto?
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog()">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <div
        class="
          d-flex
          flex-wrap
          justify-center
          black--text
          mt-5
          font-weight-bold
          header-title
          text-center
        "
      >
        {{description}}
      </div>
      <div
        class="
          d-flex
          flex-wrap
          justify-center
          black--text
          mb-5
          mt-2
          font-weight-bold
          header-title
        "
      >
        Monto: <shared-money class="pl-1" :amount="amount"></shared-money>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="error" @click="deleteExpense">Eliminar</v-btn>
      <v-btn @click="closeDialog()">Cerrar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    close: {
      type: Function,
      required: true,
    },
    getExpenses: {
      type: Function,
      required: true,
    },
  },
  data: () => ({}),
  methods: {
    async deleteExpense() {
      try {
        this.$store.commit('setLoading')
        await this.$axios.delete('api/expense/delete/' + this.id)
        this.$store.commit('setSuccess', 'Gasto Eliminado Exitosamente')
      } catch (error) {
        this.$store.commit('setError', 'Ha ocurrido un error')
      } finally {
        this.$store.commit('setLoading')
        this.closeDialog()
        await this.getExpenses()
      }
    },
    closeDialog() {
      this.close({ _id: '', description: '', totalAmount: 0 })
    },
  },
}
</script>

<style>
.header-title {
  font-size: 22px;
}
</style>