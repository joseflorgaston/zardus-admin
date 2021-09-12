<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary">
      Estado del Pedido.
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>
    <div class="ma-8">
      <center>
        <h2>
          ¿Deseas cambiar el estado del pedido a
          <span :class="getClass()">{{ status }}</span> ?
        </h2>
      </center>
    </div>
    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="changeOrderStatus"> Aceptar </v-btn>
      <v-btn text @click="closeDialog"> Cancelar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },

  methods: {
    getClass() {
      if (this.status == 'Entregado') {
        return 'success--text'
      }
      return 'error--text'
    },
    async changeOrderStatus() {
      try {
        this.$store.commit('setLoading')
        await this.$axios.patch('api/order/update/status/' + this.id, this.status)
        this.$store.commit("setSuccess", "Pedido actualizado exitosamente");
        await this.$store.dispatch('getOrders', {
          page: this.page,
          itemsPerPage: this.itemsPerPage,
        })
        this.$store.commit('setLoading')
        this.closeDialog();
      } catch (error) {
        console.log(error);
        this.$store.commit("setError", "Ha ocurrido un error al intentar actualizar el pedido");
      }
    },
    closeDialog() {
      this.$store.commit('setEditDialog')
    },
  },
}
</script>

<style>
</style>