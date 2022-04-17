<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary">
      Detalles de merma
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="mt-4 black--text">
      <v-row>
        <v-col cols="12" sm="4">
          <div class="d-flex">
            <span class="font-weight-black">Fecha: </span>
            <div class="pl-1">
              <shared-formatted-date :date="item.decreaseDate || ''"></shared-formatted-date>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="d-flex flex-wrap">
          <span class="font-weight-black">Nro. Comprobante:</span>
          <span class="ml-1">{{ item.invoiceNumber }}</span>
        </v-col>
        <v-col cols="12">
          <div class="d-flex">
            <span class="font-weight-black">Motivo: </span>
            <div class="pl-1">
              {{ item.description }}
            </div>
          </div>
        </v-col>
      </v-row>
      <v-divider class="mt-3"></v-divider>
      <center>
        <div class="mt-2">
          <h3>Detalle de merma:</h3>
        </div>
      </center>
      <v-row class="pt-2 pb-0">
        <v-col class="pb-0" cols="6">
          <span class="subtitle-2 font-weight-bold"> Producto</span>
        </v-col>
        <v-col cols="6" class="pb-0">
          <span class="subtitle-2 font-weight-bold"> Cantidad merma </span>
        </v-col>
      </v-row>
      <v-row class="pt-0" v-for="(element, k) in item.details" :key="k">
        <v-col cols="6" class="pt-0">
          {{ element.product }}
        </v-col>
        <v-col cols="6" class="pt-0">
          {{ element.quantity }} {{ element.unitOfMeasure }}
        </v-col>
      </v-row>
      <v-divider class="mt-3"></v-divider>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text @click="closeDialog" class="pa-4">Cerrar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data: () => ({

  }),
  methods: {
    closeDialog() {
      this.$store.commit('setDialog')
    },
  },
}
</script>

<style>
</style>