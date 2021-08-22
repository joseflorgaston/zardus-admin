<template>
  <div>
    <shared-header title="Proveedores"></shared-header>
    <v-row>
      <v-col cols="12" md="11">
        <v-card>
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
                  <span>Editar Proveedor</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      @click="openDeleteDialog(item)"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon color="error" title="eliminar">mdi-delete</v-icon>
                    </v-btn>
                  </template>
                  <span>Eliminar Proveedor</span>
                </v-tooltip>
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
      <delete-dialog
        :editItem="editedItem"
        title="Proveedor"
        deleteUrl="/api/provider/delete"
        :getUrl="`/api/providers/${(this.page - 1) * this.itemsPerPage}/${
          this.itemsPerPage
        }`"
      ></delete-dialog>
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
    items() {
      return this.$store.state.items
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
    count() {
      return this.$store.state.count
    },
  },
  data: () => ({
    editedItem: {},
    loading: false,
    datatableHeaders: [
      {
        text: 'Nombre',
        value: 'name',
        class: 'header-color',
      },
      {
        text: 'Dirección',
        value: 'address',
        class: 'header-color',
      },
      {
        text: 'Contacto',
        value: 'contact',
        class: 'header-color',
      },
      {
        text: 'Acciones',
        value: 'actions',
        class: 'header-color',
      },
    ],
    page: 1,
    itemsPerPage: 10,
  }),
  methods: {
    openEditDialog(item) {
      this.editedItem = {
        _id: item._id,
        name: item.name,
        address: item.address,
        contact: item.contact,
      }
      this.$store.commit('setEditDialog')
    },
    openDeleteDialog(item) {
      this.editedItem = item
      this.$store.commit('setDeleteDialog')
    },
    openCreateDialog() {
      this.$store.commit('setDialog')
    },
    async getProviders() {
      this.loading = true
      this.$store.commit('setLoading')
      await this.$store.dispatch('getProviders', {
        page: this.page,
        itemsPerPage: this.itemsPerPage,
      })
      this.$store.commit('setLoading')
      this.loading = false
    },
    async nextPage(value) {
      this.page = value
      await this.getProviders()
    },
    async otherItemCount(value) {
      this.itemsPerPage = value
      await this.getProviders()
    },
  },
  async beforeMount() {
    this.getProviders()
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