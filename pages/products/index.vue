<template>
  <div>
    <shared-header title="Productos"></shared-header>
    <v-row>
      <v-col cols="11">
        <v-card>
          <v-data-table :headers="datatableHeaders" :items="items">
            <template v-slot:[`item.actions`]="{item}">
              <v-btn icon @click="openEditDialog(item)">
                <v-icon color="primary">mdi-pencil</v-icon>
              </v-btn>
              <v-btn icon @click="openDeleteDialog(item)">
                <v-icon color="error">mdi-delete</v-icon>
              </v-btn>
            </template>
            <template v-slot:[`item.price`]="{ item }">
              <shared-money :amount="item.price"></shared-money>
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
      <delete-dialog :editItem="editedItem" title="Producto"></delete-dialog>
    </v-dialog>
  </div>
</template>

<script>
import NewProductDialog from '~/components/Dialogs/Products/NewProductDialog.vue'
import EditProductDialog from '~/components/Dialogs/Products/EditProductDialog.vue'
import DeleteDialog from '~/components/Dialogs/DeleteDialog.vue'
import SharedHeader from '~/components/SharedComponents/SharedHeader.vue'

export default {
  components: { SharedHeader, NewProductDialog, EditProductDialog, DeleteDialog},
  computed: {
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
      imageUrl: '',
      observation: '',
      category: '',
      price: 0,
      stock: '',
      fuente: '',
    },
    datatableHeaders: [
      {
        text: 'ID',
        value: 'id',
        class: 'header-color',
      },
      {
        text: 'Nombre',
        value: 'name',
        class: 'header-color',
      },
      {
        text: 'Categoria',
        value: 'category',
        class: 'header-color',
      },
      {
        text: 'Precio',
        value: 'price',
        class: 'header-color',
      },
      {
        text: 'Stock',
        value: 'stock',
        class: 'header-color',
      },
      {
        text: 'Imagen',
        value: 'imageUrl',
        class: 'header-color',
      },
      {
        text: 'Acciones',
        value: 'actions',
        class: 'header-color',
      },
    ],
    items: [
      {
        id: 1,
        name: 'Pimenton ahumado',
        category: 'Especias',
        price: 47000,
        imageUrl: 'N/A',
        observation: 'N/A',
        stock: 0,
      },
      {
        id: 2,
        name: 'Semilla de Chia',
        category: 'Semillas',
        price: 17800,
        imageUrl: 'N/A',
        observation: 'N/A',
        stock: 0,
      },
    ],
  }),
  methods: {
    openEditDialog(item) {
      this.editedItem = item;
      this.$store.commit('setEditDialog');
    },
    openDeleteDialog(item) {
      this.editedItem = item;
      this.$store.commit('setDeleteDialog')
    },
    openCreateDialog() {
      this.$store.commit('setDialog')
    },
  },
}
</script>

<style>
.header-color {
  color: black !important;
  font-weight: bold;
}

.datatable-container {
  padding-top: 20px;
  width: 100%;
}
</style>