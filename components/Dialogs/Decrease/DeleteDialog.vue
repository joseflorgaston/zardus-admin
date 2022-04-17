<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary">
      ¿Deseas deshacer esta {{ title }}?
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>

    <div class="ma-8">
      <center>
        <h2>{{ editItem.description }}</h2>
      </center>
    </div>
    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="error" @click="deleteItem"> Eliminar </v-btn>
      <v-btn text @click="closeDialog"> Cancelar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    editItem: {
      type: Object,
      required: true,
    },
    deleteUrl: {
      type: String,
      required: true,
    },
    getUrl: {
      type: String,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      try {
        this.$store.commit('setLoading')
        this.$store.commit('setDeleteDialog')
        await this.$axios.$delete(`${this.deleteUrl}/` + this.editItem._id)
        this.$store.commit('setSuccess', this.title + " Eliminado exitosamente");
        const items = await this.$axios.$get(`${this.getUrl}`)
        this.$store.commit('setItems', items.data)
        this.$store.commit('setCount', items.count)
        this.$store.commit('setLoading')
      } catch (error) {
        this.$store.commit('setError', 'Ha ocurrido un error')
      }
    },
    closeDialog() {
      this.$store.commit('setDeleteDialog')
    },
  },
}
</script>

<style>
</style>