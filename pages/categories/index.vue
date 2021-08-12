<template>
  <div>
    <shared-header title="Categorias"></shared-header>
    <v-row>
      <v-col cols="11">
        <v-card>
          <v-card>
            <v-data-table :headers="datatableHeaders" :items="items">
              <template v-slot:[`item.actions`]="{ item }">
                <v-btn icon @click="openEditDialog(item)">
                  <v-icon color="primary">mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon @click="openDeleteDialog(item)">
                  <v-icon color="error">mdi-delete</v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent min-width="500" width="700">
      <new-category-dialog></new-category-dialog>
    </v-dialog>
    <v-dialog v-model="editDialog" persistent min-width="500" width="700">
      <edit-category-dialog :editItem="editedItem"></edit-category-dialog>
    </v-dialog>
    <v-dialog v-model="deleteDialog" persistent min-width="500" width="500">
      <delete-dialog :editItem="editedItem" title="Categoría"></delete-dialog>
    </v-dialog>
  </div>
</template>

<script>
import SharedHeader from '~/components/SharedComponents/SharedHeader.vue'
import NewCategoryDialog from '~/components/Dialogs/Categories/NewCategoryDialog.vue'
import EditCategoryDialog from '~/components/Dialogs/Categories/EditCategoryDialog.vue'
import DeleteDialog from '~/components/Dialogs/DeleteDialog.vue'

export default {
  components: {
    SharedHeader,
    NewCategoryDialog,
    EditCategoryDialog,
    DeleteDialog,
  },
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
    editedItem: {},
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
        text: 'Descripcion',
        value: 'description',
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
        name: 'Semillas',
        description: 'N/A',
        imageUrl: 'N/A',
      },
      {
        id: 2,
        name: 'Especias',
        description: 'N/A',
        imageUrl: 'N/A',
      },
      {
        id: 3,
        name: 'Hierbas',
        description: 'N/A',
        imageUrl: 'N/A',
      },
      {
        id: 4,
        name: 'Frutos secos.',
        description: 'N/A',
        imageUrl: 'N/A',
      },
      {
        id: 5,
        name: 'Deshidratados.',
        description: 'N/A',
        imageUrl: 'N/A',
      },
    ],
  }),
  methods: {
    openEditDialog(item) {
      this.editedItem = item
      this.$store.commit('setEditDialog')
    },
    openDeleteDialog(item) {
      this.editedItem = item
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