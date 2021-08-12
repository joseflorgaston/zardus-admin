<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      app
      clipped
    >
      <template #prepend>
        <div class="profile-container ml-5 mr-5 ">
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
      </v-list>

      <template #append>
        <div class="pb-8 pb-md-5 d-flex justify-center">
          <v-btn
            class="mt-auto"
            outlined
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
      <v-icon color="white"> mdi-bell </v-icon>
    </v-app-bar>

    <v-main class="grey lighten-5">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
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
          icon: 'mdi-format-list-bulleted-square ',
          title: 'Categorías',
          to: '/categories',
        },
        {
          icon: 'mdi-warehouse',
          title: 'Depósitos',
          to: '/warehouse',
        },
        {
          icon: 'mdi-swap-horizontal-bold ',
          title: 'Movimientos',
          to: '/movements',
        },
      ],
      logoutModal: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Bienvenida',
    }
  },
  methods: {
    async logout(event) {
      if (!event) return
      try {
        await this.$auth.logout()
        await this.$router.push({ path: '/users' })
      } catch (e) {
        console.log(e)
        this.$store.commit('setError', true)
      }
    },
  },
}
</script>

<style scoped>
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
</style>