<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary">
      ¿Deseas eliminar este {{ title }}?
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>

    <div class="ma-8">
      <center>
        <h2>{{ editItem.name }}</h2>
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
      this.$store.commit("setLoading");
      await this.$axios.$delete(`${this.deleteUrl}/` + this.editItem._id);
      const items = await this.$axios.$get(`${this.getUrl}`);
      this.$store.commit("setItems", items);
      this.$store.commit("setDeleteDialog");
      this.$store.commit("setLoading");
    },
    closeDialog() {
      this.$store.commit('setDeleteDialog')
    },
  },
}
</script>

<style>
</style>