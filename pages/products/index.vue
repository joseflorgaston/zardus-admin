<template>
  <div>
    <product-header
      title="Productos"
      class="mt-1 mb-0 pb-0"
      v-on:mixtureModal="openMixtureModal()"
    ></product-header>
    <v-row class="pt-0">
      <v-col cols="12" md="11">
        <v-card>
          <v-data-table
            :headers="datatableHeaders"
            :items="items"
            :server-items-length="count"
            :page="page"
            :items-per-page="itemsPerPage"
            @update:page="nextPage"
            @update:items-per-page="otherItemCount"
            :loading="loading"
            :footer-props="{
              itemsPerPageOptions: [5, 10, 15],
            }"
          >
            <template v-slot:[`item.actions`]="{ item }">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    @click="openEditDialog(item)"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon color="primary" title="editar">mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <span>Editar Producto</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    @click="openDeleteDialog(item)"
                    v-bind="attrs"
                    v-on="on"
                    :disabled="item.inOrder > 0"
                  >
                    <v-icon color="error" title="eliminar">mdi-delete</v-icon>
                  </v-btn>
                </template>
                <span>Eliminar Producto</span>
              </v-tooltip>
            </template>
            <template v-slot:[`item.price`]="{ item }">
              <shared-money :amount="item.price || 0"></shared-money>
            </template>
            <template v-slot:[`item.stock`]="{ item }">
              <div class="d-flex">
                <shared-money
                  :amount="item.stock || 0"
                  currency=""
                  class="mr-1"
                ></shared-money>
                {{ item.unitOfMeasure }}
              </div>
            </template>
            <template v-slot:[`item.inOrder`]="{ item }">
              <div class="d-flex">
                <shared-money
                  :amount="item.inOrder || 0"
                  currency=""
                  class="mr-1"
                ></shared-money>
                {{ item.unitOfMeasure }}
              </div>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent min-width="500" width="700">
      <new-product-dialog></new-product-dialog>
    </v-dialog>
    <v-dialog v-model="editDialog" persistent min-width="500" width="700">
      <edit-product-dialog :editItem="editedItem"></edit-product-dialog>
    </v-dialog>
    <v-dialog v-model="deleteDialog" persistent max-width="500">
      <delete-dialog
        :editItem="editedItem"
        title="Producto"
        deleteUrl="/api/product/delete"
        :getUrl="`/api/products/${(this.page - 1) * this.itemsPerPage}/${
          this.itemsPerPage
        }`"
      ></delete-dialog>
    </v-dialog>
  </div>
</template>

<script>
import NewProductDialog from '~/components/Dialogs/Products/NewProductDialog.vue'
import EditProductDialog from '~/components/Dialogs/Products/EditProductDialog.vue'
import DeleteDialog from '~/components/Dialogs/DeleteDialog.vue'
import ProductHeader from '~/components/Headers/ProductsHeader.vue'

export default {
  auth: true,
  components: {
    ProductHeader,
    NewProductDialog,
    EditProductDialog,
    DeleteDialog,
  },
  computed: {
    items: {
      get() {
        return this.$store.state.items
      },
      set(values) {
        this.$store.commit('setItems', values)
      },
    },
    count() {
      return this.$store.state.count
    },
    dialog: {
      get() {
        return this.$store.state.dialog
      },
      set() {
        this.$store.commit('setDialog')
      },
    },
    editDialog: {
      get() {
        return this.$store.state.editDialog
      },
      set() {
        this.$store.commit('setEditDialog')
      },
    },
    deleteDialog: {
      get() {
        return this.$store.state.deleteDialog
      },
      set() {
        this.$store.commit('setDeleteDialog')
      },
    },
  },
  data: () => ({
    loading: true,
    editedItem: {
      id: '',
      name: '',
      unitOfMeasure: '',
      category: '',
      price: '',
      stock: '',
    },
    datatableHeaders: [
      {
        text: 'Nombre',
        value: 'name',
        class: 'header-color white--text',
      },
      {
        text: 'Categoría',
        value: 'category',
        class: 'header-color white--text',
      },
      {
        text: 'Precio',
        value: 'price',
        class: 'header-color white--text',
      },
      {
        text: 'Stock',
        value: 'stock',
        class: 'header-color white--text',
      },
      {
        text: 'Reservado',
        value: 'inOrder',
        class: 'header-color white--text',
      },
      {
        text: 'Acciones',
        value: 'actions',
        class: 'header-color white--text',
      },
    ],
    mixtureDialog: false,
    page: 1,
    itemsPerPage: 10,
  }),
  async beforeMount() {
    if (!this.$auth.loggedIn) {
      return this.$router.push('/login')
    }
    await this.getProducts()
  },
  methods: {
    openEditDialog(item) {
      this.editedItem = {
        _id: item._id,
        name: item.name,
        unitOfMeasure: item.unitOfMeasure,
        category: item.category,
        price: item.price.toString(),
        stock: item.stock.toString(),
      }
      console.log(this.editedItem)
      this.$store.commit('setEditDialog')
    },
    openMixtureModal() {
      console.log(this.mixtureDialog)
      this.mixtureDialog = !this.mixtureDialog
    },
    openDeleteDialog(item) {
      this.editedItem = item
      this.$store.commit('setDeleteDialog')
    },
    openCreateDialog() {
      this.$store.commit('setDialog')
    },
    async nextPage(value) {
      this.page = value
      await this.getProducts()
    },
    async otherItemCount(value) {
      this.itemsPerPage = value
      await this.getProducts()
    },
    async getProducts() {
      this.loading = true
      this.$store.commit('setLoading')
      await this.$store.dispatch('getProducts', {
        page: this.page,
        itemsPerPage: this.itemsPerPage,
      })
      this.$store.commit('setLoading')
      this.loading = false
    },
  },
}
</script>