<template>
  <div>
    <shared-header title="Depósitos"></shared-header>
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
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent min-width="500" width="700">
      <new-warehouse-dialog></new-warehouse-dialog>
    </v-dialog>
    <v-dialog v-model="editDialog" persistent min-width="500" width="700">
      <edit-warehouse-dialog :editItem="editedItem"></edit-warehouse-dialog>
    </v-dialog>
    <v-dialog v-model="deleteDialog" persistent min-width="500" width="500">
      <delete-dialog :editItem="editedItem" title="Depósito"></delete-dialog>
    </v-dialog>
  </div>
</template>

<script>
import SharedHeader from '~/components/SharedComponents/SharedHeader.vue'
import DeleteDialog from '~/components/Dialogs/DeleteDialog.vue'
import NewWarehouseDialog from '~/components/Dialogs/Warehouse/NewWarehouseDialog.vue'
import EditWarehouseDialog from '~/components/Dialogs/Warehouse/EditWarehouseDialog.vue'

export default {
  components: { SharedHeader, DeleteDialog, NewWarehouseDialog, EditWarehouseDialog },
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
        text: 'Direccion',
        value: 'address',
        class: 'header-color',
      },
      {
        text: 'Actions',
        value: 'actions',
        class: 'header-color',
      },
    ],
    items: [
      {
        id: 1,
        name: 'Central',
        address: 'Mcal. lopez 502',
      }, {
        id: 2,
        name: 'Deposito 2',
        address: 'Rocky Balboa esq/ Mcal Lopez 640',
      }, {
        id: 3,
        name: 'Deposito 3',
        address: 'Calle falsa 404',
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