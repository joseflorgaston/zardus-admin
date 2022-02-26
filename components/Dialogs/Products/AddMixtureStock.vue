<template>
  <v-card width="600" max-width="100%">
    <v-card-title class="text-h5 white--text primary header">
      Agregar al stock
      <v-spacer></v-spacer>
      <v-btn icon color="error" @click="closeDialog()">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>
    <v-form v-model="isValid" class="mt-5">
      <v-row style="width: 100%">
        <v-col offset="1" cols="10" sm="6">
          <h3>Cantidad a añadir ({{ editItem.unitOfMeasure }}).</h3>
          <v-text-field
            type="number"
            v-model="stock"
            label="Cantidad a añadir"
            :rules="quantityRules"
          >
          </v-text-field>
        </v-col>
        <v-col offset="1" cols="10" offset-sm="0" sm="4">
          <h3>Ingredientes.</h3>
          <v-select
            type="number"
            v-model="selectedMode"
            :items="addStockType"
            label="Modo"
            :rules="rules"
          >
          </v-select>
        </v-col>
        <v-col offset="1" cols="10" v-show="selectedMode == 'Formula'">
          <center>
            <h3>Ingredientes.</h3>
            <v-divider class="primary my-1"></v-divider>
            <div class="d-flex d-flex justify-space-around flex-wrap">
              <div class="col-4 cols-4">
                <h4>Producto.</h4>
              </div>
              <div class="col-4 cols-4">
                <h4>
                  Cantidad por {{ editItem.quantityPerIngredients }}
                  {{ editItem.unitOfMeasure }}.
                </h4>
              </div>
              <div class="col-4 cols-4">
                <h4>Cantidad a descontar.</h4>
              </div>
            </div>
            <div v-for="(ingredient, i) in editItem.ingredients" :key="i">
              <div class="d-flex d-flex justify-space-around flex-wrap">
                <div class="col-4 cols-4">
                  {{ ingredient.name }}
                </div>
                <div class="col-4 cols-4">
                  {{ ingredient.quantity }} {{ ingredient.unitOfMeasure }}
                </div>
                <div class="col-4 cols-4">
                  {{
                    (ingredient.quantity * stock) /
                    editItem.quantityPerIngredients
                  }}
                  {{ ingredient.unitOfMeasure }}.
                </div>
              </div>
            </div>
          </center>
        </v-col>
        <v-col offset="1" cols="10" v-show="selectedMode != 'Formula'">
          <center>
            <h3>Ingredientes.</h3>
            <v-divider class="primary my-1"></v-divider>
            <div class="d-flex d-flex justify-space-around flex-wrap align-center">
              <div class="col-10 col-sm-4">
                <v-text-field label="Producto">
                  
                </v-text-field>
              </div>
              <div class="col-10 col-sm-4">
                <v-text-field label="Cantidad" type="number">
                  
                </v-text-field>
              </div>
              <div class="col-10 col-sm-4">
                <v-btn color="primary">
                  Agregar
                </v-btn>
              </div>
              <div class="col-4 cols-4">
                <h4>Producto.</h4>
              </div>
              <div class="col-4 cols-4">
                <h4>
                  Cantidad por {{ editItem.quantityPerIngredients }}
                  {{ editItem.unitOfMeasure }}.
                </h4>
              </div>
              <div class="col-4 cols-4">
                <h4>Cantidad a descontar.</h4>
              </div>
            </div>
            <div v-for="(ingredient, i) in editItem.ingredients" :key="i">
              <div class="d-flex d-flex justify-space-around flex-wrap">
                <div class="col-4 cols-4">
                  {{ ingredient.name }}
                </div>
                <div class="col-4 cols-4">
                  {{ ingredient.quantity }} {{ ingredient.unitOfMeasure }}
                </div>
                <div class="col-4 cols-4">
                  {{
                    (ingredient.quantity * stock) /
                    editItem.quantityPerIngredients
                  }}
                  {{ ingredient.unitOfMeasure }}.
                </div>
              </div>
            </div>
          </center>
        </v-col>
      </v-row>
    </v-form>

    <v-card-actions class="d-flex flex-wrap">
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        @click="save()"
        :disabled="editItem.ingredients.length == 0 || !isValid"
        >Guardar</v-btn
      >
      <v-btn @click="closeDialog()">Cancelar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    editItem: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    isValid: false,
    stock: 0,
    quantityRules: [
      (v) => v > 0 || 'Este campo debe ser mayor a 0',
      (v) => !!v || 'Este campo es requerido',
    ],
    rules: [(v) => !!v || 'Este campo es requerido'],
    selectedMode: 'Formula',
    addStockType: ['Formula', 'Elegir Ingredientes'],
    customIngredients: [],
  }),
  methods: {
    closeDialog() {
      this.$emit('closeEditMixtureStock')
    },
    async save() {
      const store = this.$store
      try {
        store.commit('setLoading')
        const response = await this.$axios
          .$put('api/mixtures/updateStock/' + this.editItem._id, {
            stock: this.stock,
          })
          .catch(function (error) {
            if (error.response) {
              store.commit(
                'setError',
                error.response.data.message +
                  '\n Ingrediente: ' +
                  error.response.data.producto +
                  '\n Stock:' +
                  error.response.data.stock +
                  '\n Reservado:' +
                  error.response.data.inOrder
              )
              return error.response.status
            }
          })
        if (response == 400) {
          return store.commit('setLoading')
        }
        this.closeDialog()
        this.$store.commit('setSuccess', 'La mezcla ha sido añadida al stock')
        await store.dispatch('getMixtures', {
          page: 1,
          itemsPerPage: 10,
        })
      } catch (error) {
        console.log(error)
        store.commit('setError', error.toString())
      }
      store.commit('setLoading')
    },
  },
}
</script>

<style>
</style>