<template>
  <div class="d-flex flex-wrap">
    <div class="col-12 col-sm-3 col-md-2">
      <h2>Mezclas</h2>
    </div>
    <div class="col-12 col-sm-9 col-md-4 col-lg-6">
      <v-text-field
        rounded
        single-line
        outlined
        filled
        dense
        :label="'Buscar ' + title"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
    </div>
    <div class="col-6 col-md-3 col-lg-2">
      <v-btn color="primary" width="100%" max-width="250" @click="openMixtureModal()">
        <v-icon class="mr-2">mdi-plus</v-icon>
        Mezcla
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    hasSearchQuery: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    openMixtureModal() {
        this.$emit('mixtureModal');
    }
  },
}
</script>

<style>
</style>