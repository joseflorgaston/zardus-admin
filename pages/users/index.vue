<template>
  <div>
    <v-row class="pt-0">
      <v-col cols="12" md="11">
        <users-header></users-header>
      </v-col>
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
                    v-show="item.userName != 'jose'"
                    icon
                    @click="openEditDialog(item)"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon color="primary" title="editar">mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <span>Editar Usuario</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-show="item.userName != 'jose'"
                    icon
                    @click="openDeleteDialog(item)"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon color="error" title="eliminar">mdi-delete</v-icon>
                  </v-btn>
                </template>
                <span>Eliminar Usuario</span>
              </v-tooltip>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent min-width="500" width="700">
      <new-user-dialog></new-user-dialog>
    </v-dialog>
    <v-dialog v-model="editDialog" persistent min-width="500" width="700">
      <update-user-dialog :editItem="editedItem"></update-user-dialog>
    </v-dialog>
    <v-dialog v-model="deleteDialog" persistent max-width="500">
      <delete-dialog
        :editItem="editedItem"
        title="Usuario"
        deleteUrl="/api/user"
        :getUrl="`/api/users/${(this.page - 1) * this.itemsPerPage}/${
          this.itemsPerPage
        }`"
      ></delete-dialog>
    </v-dialog>
  </div>
</template>

<script>
import NewUserDialog from '~/components/Dialogs/Users/NewUserDialog.vue'
import UpdateUserDialog from '~/components/Dialogs/Users/UpdateUserDialog.vue'
import DeleteDialog from '~/components/Dialogs/DeleteDialog.vue'
import UsersHeader from '~/components/Headers/UsersHeader.vue'

export default {
  auth: true,
  components: {
    NewUserDialog,
    UpdateUserDialog,
    DeleteDialog,
    UsersHeader,
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
      userName: '',
      email: '',
      roles: [],
    },
    datatableHeaders: [
      {
        text: 'Nombre de usuario',
        value: 'userName',
        class: 'header-color white--text',
      },
      {
        text: 'Email',
        value: 'email',
        class: 'header-color white--text',
      },
      {
        text: 'Roles',
        value: 'roles',
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
    await this.getUsers()
  },
  methods: {
    openEditDialog(item) {
      this.editedItem = {
        _id: item._id,
        userName: item.userName,
        email: item.email,
        password: '',
        name: item.userName,
        roles: `${item.roles[0]}`
      }
      this.$store.commit('setEditDialog')
    },
    openDeleteDialog(item) {
      this.editedItem = item
      this.editedItem.name = item.userName
      this.$store.commit('setDeleteDialog')
    },
    openCreateDialog() {
      this.$store.commit('setDialog')
    },
    async nextPage(value) {
      this.page = value
      await this.getUsers()
    },
    async otherItemCount(value) {
      this.itemsPerPage = value
      await this.getUsers()
    },
    async getUsers() {
      this.loading = true
      this.$store.commit('setLoading')
      await this.$store.dispatch('getUsers', {
        page: this.page,
        itemsPerPage: this.itemsPerPage,
      })
      this.$store.commit('setLoading')
      this.loading = false
    },
  },
}
</script>