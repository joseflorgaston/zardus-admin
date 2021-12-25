<template>
  <v-card>
    <v-card-title class="text-h5 white--text primary">
      Ver Pedido
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="mt-4 black--text">
      <v-row>
        <v-col cols="12" sm="4">
          <div class="d-flex">
            <span class="font-weight-black">Fecha del pedido: </span>
            <div class="pl-1">
              <shared-formatted-date
                :date="item.createdOn || ''"
              ></shared-formatted-date>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <span class="font-weight-black">Cliente:</span>
          <span>{{ item.client }}</span>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="d-flex">
            <span class="font-weight-black">Fecha de entrega: </span>
            <div class="pl-1">
              <shared-formatted-date
                :date="item.deliveryDate || ''"
              ></shared-formatted-date>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <span class="font-weight-black">Metodo de pago:</span>
          <span>{{ item.paymentMethod }}</span>
        </v-col>
        <v-col cols="12" sm="4">
          <span class="font-weight-black">Encargado:</span>
          <span>{{ item.userName }}</span>
        </v-col>
        <v-col cols="12" sm="4">
          <span class="font-weight-black">Estado:</span>
          <span :class="getStatusClass()">{{ item.status }}</span>
        </v-col>
      </v-row>
      <v-divider class="mt-3"></v-divider>
      <center>
        <div class="mt-2">
          <h3>Detalle del pedido:</h3>
        </div>
      </center>
      <v-row class="pt-2 pb-0">
        <v-col class="pb-0" cols="4">
          <span class="subtitle-2 font-weight-bold"> Producto</span>
        </v-col>
        <v-col cols="3" class="pb-0">
          <span class="subtitle-2 font-weight-bold"> Precio</span>
        </v-col>
        <v-col cols="2" class="pb-0">
          <span class="subtitle-2 font-weight-bold"> Cantidad</span>
        </v-col>
        <v-col cols="3" class="pb-0">
          <span class="subtitle-2 font-weight-bold"> SubTotal</span>
        </v-col>
      </v-row>
      <v-row class="pt-0" v-for="(element, k) in item.details" :key="k">
        <v-col cols="4" class="pt-0">
          {{ element.product.name }}
        </v-col>
        <v-col cols="3" class="pt-0">
          <shared-money :amount="element.product.price"></shared-money>
        </v-col>
        <v-col cols="2" class="pt-0">
          {{ element.quantity }} {{ element.product.unitOfMeasure }}
        </v-col>
        <v-col cols="3" class="pt-0">
          <shared-money :amount="element.subTotal"></shared-money>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <div class="d-flex">
        <span class="subtitle-2 font-weight-bold">Monto Total:</span> 
        <shared-money :amount="item.totalAmount" class="pl-1 subtitle-2"></shared-money>
      </div>
      <v-spacer></v-spacer
      ><v-btn text @click="closeDialog" class="pa-4">Cerrar</v-btn>
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
  methods: {
    closeDialog() {
      this.$store.commit('setDialog')
    },
    getStatusClass() {
      if (this.item.status == 'Aguardando') {
        return 'blue--text ligthen-1'
      } else if (this.item.status == 'Cancelado') {
        return 'red--text'
      } else if (this.item.status == 'Preparado') {
        return 'yellow--text'
      }
      return 'success--text'
    },
  },
}
</script>

<style>
</style>