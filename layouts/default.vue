<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      app
      clipped
    >
      <template #prepend>
        <div class="profile-container ml-5 mr-5">
          <div>
            <div class="mb-5">
              <v-img
                :lazy-src="logo"
                max-height="150"
                max-width="250"
                contain
                :src="logo"
              ></v-img>
            </div>
            <span class="d-block text-body-2 title">Admin</span>
          </div>
        </div>
        <v-divider />
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          exact-active-class="active-link"
          style="padding: 0px"
        >
          <div class="d-flex pl-4">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </div>
        </v-list-item>
        <v-list-item
          v-show="isAdmin"
          to="/users"
          router
          exact
          exact-active-class="active-link"
          style="padding: 0px"
        >
          <div class="d-flex pl-4">
            <v-list-item-action>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="'Usuarios'" />
            </v-list-item-content>
          </div>
        </v-list-item>
        <v-list-item
          style="width: 100%; padding: 0px !important; margin: 0px !important"
        >
          <v-list-group>
            <template v-slot:activator>
              <v-list-item-action>
                <v-icon>mdi-swap-horizontal-bold</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title
                  class="default-font"
                  v-text="'Movimientos'"
                  exact
                  exact-active-class="active-link"
                />
              </v-list-item-content>
            </template>
            <v-list style="padding-top: 0px; padding-left: 12px">
              <v-list-item
                to="/buy_products"
                exact
                exact-active-class="active-link"
              >
                <v-list-item-action>
                  <v-icon>mdi-truck-check </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="default-font" v-text="'Compras'" />
                </v-list-item-content>
              </v-list-item>
              <v-list-item to="/orders" active-class="active-link">
                <v-list-item-action>
                  <v-icon>mdi-clipboard-list-outline </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="default-font" v-text="'Pedidos'" />
                </v-list-item-content>
              </v-list-item>
              <v-list-item to="/orders_history" active-class="active-link">
                <v-list-item-action>
                  <v-icon>mdi-list-status </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title
                    class="default-font"
                    v-text="'Historial de pedidos'"
                  />
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-group>
        </v-list-item>
        <v-list-item
          style="width: 100%; padding: 0px !important; margin: 0px !important"
        >
          <v-list-group v-show="isAdmin">
            <template v-slot:activator>
              <v-list-item-action>
                <v-icon>mdi-clipboard-text-outline </v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title
                  class="default-font"
                  v-text="'Reportes'"
                  exact
                  exact-active-class="active-link"
                />
              </v-list-item-content>
            </template>
            <v-list style="padding-top: 0px; padding-left: 12px">
              <v-list-item
                to="/balances"
                exact
                exact-active-class="active-link"
              >
                <v-list-item-action>
                  <v-icon>mdi-finance</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="default-font" v-text="'Balances'" />
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                to="/expenses"
                exact
                exact-active-class="active-link"
              >
                <v-list-item-action>
                  <v-icon>mdi-cash</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title
                    class="default-font"
                    v-text="'Gastos varios'"
                  />
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-group>
        </v-list-item>
      </v-list>
      <template #append>
        <div class="pb-2 px-4 d-flex justify-center">
          <v-btn
            class="mt-auto"
            outlined
            color="black"
            width="100%"
            @click.prevent="changePasswordModal = true"
          >
            Cambiar Contraseña
          </v-btn>
        </div>
        <div class="pb-8 px-4 pb-md-5 d-flex justify-center">
          <v-btn
            class="mt-auto"
            outlined
            width="100%"
            color="error"
            @click.prevent="logoutModal = true"
          >
            Cerrar Sesion
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar fixed app flat clipped-left color="primary">
      <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer" />

      <v-toolbar-title class="white--text title" v-text="title" />
      <v-spacer />

      <v-spacer />
    </v-app-bar>

    <v-main class="grey lighten-4">
      <v-container>
        <nuxt />
      </v-container>
      <shared-snackbar></shared-snackbar>
      <v-dialog v-model="logoutModal" width="300">
        <logout-modal v-on:closeDialog="closeDialog()"></logout-modal>
      </v-dialog>
      <v-dialog v-model="changePasswordModal" persistent max-width="500">
        <change-password-modal v-on:closeDialog="closeChangePasswordModal()"></change-password-modal>
      </v-dialog>
    </v-main>
    <v-overlay :value="loading">
      <v-progress-circular
        color="primary"
        indeterminate
        size="128"
      ></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script>
import LogoutModal from '../components/Dialogs/LogoutDialog.vue'
import changePasswordModal from '../components/Dialogs/ChangePasswordDialog.vue'
export default {
  components: { LogoutModal, changePasswordModal },
  auth: true,
  computed: {
    loading: {
      get() {
        return this.$store.state.loading
      },
      set(value) {
        return this.$store.commit('setLoading')
      },
    },
    isAdmin: {
      get() {
        if (this.$auth.$storage.getLocalStorage('user') == null) return false
        if (
          this.$auth.$storage
            .getLocalStorage('user')
            .roles.includes('ROLE_ADMIN')
        )
          return true

        return false
      },
      set(value) {
        return value
      },
    },
  },
  data() {
    return {
      clipped: false,
      drawer: null,
      fixed: false,
      logo: require('../assets/images/Zardus_logo.png'),
      items: [
        {
          icon: 'mdi-seed',
          title: 'Productos',
          to: '/products',
        },
        {
          icon: 'mdi-bowl-mix ',
          title: 'Mezclas',
          to: '/mixtures',
        },
        {
          icon: 'mdi-package-variant-closed',
          title: 'Proveedores',
          to: '/providers',
        },
      ],
      changePasswordModal: false,
      logoutModal: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Bienvenido/a ',
    }
  },
  async mounted() {
    if (!this.$auth.loggedIn) {
      this.$router.push('/login')
    }
    this.title =
      this.title + this.$auth.$storage.getLocalStorage('user').userName
    console.log(this.$auth.$storage.getLocalStorage('user'))
  },
  methods: {
    closeDialog() {
      this.logoutModal = false
    },
    closeChangePasswordModal() {
      this.changePasswordModal = false;
    }
  },
}
</script>

<style>
.title {
  font-weight: 800;
}

.active-link {
  color: #336b87;
}

.profile-container {
  display: flex;
  height: 100px;
  align-items: flex-end;
}

.header-color {
  background: #07575b;
  color: aliceblue;
}
</style>