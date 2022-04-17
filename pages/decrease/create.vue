<template>
    <v-card>
        <v-form v-model="isValid">
            <div class="container-fluid d-flex flex-wrap px-sm-4 align-center">
                <div class="col-12 mt-3">
                    <h2>Merma de productos</h2>
                </div>
                <div class="col-12">
                    <v-divider></v-divider>
                </div>
                <div class="col-12 col-sm-6">
                    <h4>Fecha</h4>
                    <v-menu ref="menu" v-model="menu" :return-value.sync="computedDateFormattedMomentjs"
                        :close-on-content-click="false" transition="scale-transition" min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                            <v-combobox v-model="computedDateFormattedMomentjs" color="primary"
                                prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" outlined dense>
                            </v-combobox>
                        </template>
                        <v-date-picker v-model="formDetails.decreaseDate" locale="es-py" title="Entrega"
                            header-color="primary" scrollable>
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
                            <v-btn text color="primary" @click="$refs.menu.save(formDetails.decreaseDate)">
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-menu>
                </div>
                <div class="col-12 col-sm-6">
                    <h4>Nro. de comprobante</h4>
                    <v-text-field outlined dense placeholder="Nro de comprobante" prepend-inner-icon="mdi-receipt"
                        :rules="rules" v-model="formDetails.invoiceNumber" name="invoiceNumber">
                    </v-text-field>
                </div>
                <div class="col-12 col-sm-12">
                    <h4>Observacion</h4>
                    <v-textarea outlined placeholder="Observacion" name="description" prepend-inner-icon="mdi-note-text"
                        v-model="formDetails.description"></v-textarea>
                    <v-divider></v-divider>
                </div>
                <div class="col-12 col-sm-4">
                    <h4>Producto</h4>
                    <v-autocomplete prepend-inner-icon="mdi-seed" :rules="rules" :items="products" item-text="name"
                        v-model="autocomplete" :search-input.sync="search" @change="selectProduct($event)" outlined
                        dense return-object>
                    </v-autocomplete>
                </div>
                <div class="col-12 col-sm-4">
                    <h4>Cantidad ({{ this.selectedProduct.unitOfMeasure }})</h4>
                    <v-text-field type="number" prepend-inner-icon="mdi-numeric-2-box-multiple-outline "
                        :disabled="!selectedProduct" outlined dense :rules="quantityRules" name="quantity"
                        v-model="formDetails.quantity">
                    </v-text-field>
                </div>
                <div class="col-12 col-sm-4">
                    <v-btn color="primary" @click="addProduct()" :disabled="!isValid">
                        agregar
                    </v-btn>
                </div>

                <div class="col-12">
                    <v-divider></v-divider>
                </div>
                <div class="col-12">
                    <v-card>
                        <v-data-table :headers="dataTableHeaders" :items="selectedProducts">
                            <template v-slot:[`item.actions`]="{ item }">
                                <v-btn icon>
                                    <v-icon color="error" @click="removeItem(item)" title="Remover item">mdi-close
                                    </v-icon>
                                </v-btn>
                            </template>
                            <template v-slot:[`item.decreaseQuantity`]="{ item }">
                                <div class="d-flex">
                                    {{ sharedFunction.formatMiles(item.decreaseQuantity) + " " + item.unitOfMeasure }}
                                </div>
                            </template>
                            <template v-slot:[`item.stock`]="{ item }">
                                <div class="d-flex">
                                    {{ sharedFunction.formatMiles(item.stock) + " " + item.unitOfMeasure }}
                                </div>
                            </template>
                        </v-data-table>
                    </v-card>
                </div>
                <div class="col-12">
                    <v-btn color="primary" class="float-right" @click="saveDecrease()" :disabled="!hasItem">
                        Guardar
                    </v-btn>
                </div>
            </div>
        </v-form>
    </v-card>
</template>

<script>
import sharedFunctions from '~/shared/sharedFunctions.js'
import moment from 'moment'
import { format, parseISO } from 'date-fns'
export default {
    data: () => ({
        autocomplete: "",
        isValid: false,
        isEdit: false,
        hasItem: false,
        menu: false,
        search: null,
        sharedFunction: null,
        formDetails: {
            decreaseDate: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
        },
        selectedProduct: {},
        products: [],
        selectedProducts: [],
        rules: [(v) => !!v || 'Este campo es requerido'],
        quantityRules: [
            (v) => v > 0 || 'Coloca un numero mayor a 0',
            (v) => !!v || 'Este campo es requerido',
        ],
        dataTableHeaders: [
            {
                text: 'Producto',
                value: 'name',
                class: 'header-color white--text',
            },
            {
                text: 'Cantidad mermada',
                value: 'decreaseQuantity',
                class: 'header-color white--text',
            },
            {
                text: 'Stock restante',
                value: 'stock',
                class: 'header-color white--text',
            },
            {
                text: 'Acciones',
                value: 'actions',
                class: 'header-color white--text',
            },
        ],
    }),
    async beforeMount() {
        this.sharedFunction = sharedFunctions;
        this.$store.commit('setLoading')
        if (this.$route.query._id != null) {
            const item = await this.$axios.$get('/api/decrease/' + this.$route.query._id);
            this.setItem(item)
        }
        this.$store.commit('setLoading')
    },
    computed: {
        computedDateFormattedMomentjs: {
            get() {
                return this.formDetails.decreaseDate
                    ? moment(this.formDetails.decreaseDate)
                        .locale('es_py')
                        .format('dddd, DD MMMM, yyyy')
                    : ''
            },
            set(value) {
                return this.formDetails.decreaseDate
                    ? moment(this.formDetails.decreaseDate)
                        .locale('es_py')
                        .format('dddd, DD MMMM, yyyy')
                    : ''
            },
        },
    },
    watch: {
        async search(val) {
            if (val == null) {
                this.formDetails.price = 0
                return
            }
            if (val.length < 2) return
            const product = await this.$axios.$get(`/api/allProducts/${val}`)
            this.products = product.data
        },
    },
    methods: {
        selectProduct(product) {
            this.selectedProduct = product;
        },
        setItem(item) {
            this.isEdit = true;
            this.hasItem = true;
            this.formDetails = {
                decreaseDate: item.decreaseDate,
                description: item.description,
                createdOn: item.createdOn,
                invoiceNumber: item.invoiceNumber
            }
            for (let index = 0; index < item.details.length; index++) {
                const product = {
                    name: item.details[index].product,
                    decreaseQuantity: item.details[index].quantity,
                    unitOfMeasure: item.details[index].unitOfMeasure,
                    stock: '',
                    _id: item.details[index]._id
                }
                this.selectedProducts.push(product);
            }
        },
        async saveDecrease() {
            try {
                this.formDetails.details = this.getDecreaseDetails();
                this.$store.commit('setLoading');
                if (this.isEdit) {
                    await this.$axios.put(`/api/decrease/` + this.$route.query._id, this.formDetails)
                } else {
                    await this.$axios.$post(`/api/decrease`, this.formDetails)
                }
                console.log(this.formDetails);
            } catch (error) {
                console.log(error)
                this.$store.commit('setError', "Ha ocurrido un error");
            } finally {
                this.$store.commit('setLoading');
                this.$router.push('/decrease')
            }
        },
        getDecreaseDetails() {
            let details = []
            for (let i = 0; i < this.selectedProducts.length; i++) {
                const element = {
                    _id: this.selectedProducts[i]._id,
                    quantity: this.selectedProducts[i].decreaseQuantity,
                    product: this.selectedProducts[i].name,
                    unitOfMeasure: this.selectedProducts[i].unitOfMeasure
                };
                details.push(element);
            }
            return details;
        },
        removeItem(item) {
            const index = this.selectedProducts.indexOf(item)
            this.selectedProducts.splice(index, 1)
            if (this.selectedProducts.length == 0) {
                this.hasItem = false
            }
        },
        validProduct() {
            if (this.selectedProducts.length > 0) {
                const filter = this.selectedProducts.filter(
                    (item) => item.name == this.selectedProduct.name
                )
                if (filter.length > 0) {
                    this.autocomplete = null
                    this.$store.commit(
                        'setError',
                        'Este producto ya se agrego en la tabla'
                    )
                    return false
                }
            }
            return true
        },
        addProduct() {
            if (!this.validProduct()) return;
            let stockRemaining = this.selectedProduct.stock - this.formDetails.quantity;
            if (stockRemaining < 0) {
                return this.$store.commit('setError', "La cantidad mermada supera al stock del producto: " + this.selectedProduct.stock);
            }
            this.selectedProduct.stock = stockRemaining;
            this.selectedProduct.decreaseQuantity = this.formDetails.quantity;
            this.selectedProducts.push(this.selectedProduct);
            this.hasItem = true;
        }
    }
}
</script>

<style>
</style>