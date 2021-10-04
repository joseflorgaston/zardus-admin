<template>
  <v-row>
    <v-col cols="12" offset-md="0" sm="3">
      <h2>{{ title }}</h2>
    </v-col>
    <v-col cols="12" sm="6" md="5">
      <v-text-field
        rounded
        single-line
        outlined
        filled
        dense
        :label="'Buscar ' + title"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="3" offset-md="1" md="2">
      <v-btn color="primary" width="100%" @click="goToPage()">
        <v-icon class="mr-2">mdi-plus</v-icon>
        Agregar
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        link: {
            type:String,
            require: false,
        }
    },
    methods: {
        goToPage() {
            this.$router.push(this.link);
        }
    }
}
</script>

<style>
</style>