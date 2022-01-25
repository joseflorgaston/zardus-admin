
export const state = () => ({
  items: [],
  editItem: {},
  dialog: false,
  editDialog: false,
  deleteDialog: false,
  loading: false,
  snackbar: false,
  snackbarColor: 'success',
  message: '',
  count: 0,
  user: {}
})

export const mutations = {

  setItems(state, items) {
    state.items = items;
  },
  setEditItem(state, item) {
    state.editItem = item;
  },
  setDialog(state) {
    state.dialog = !state.dialog;
  },
  setEditDialog(state) {
    state.editDialog = !state.editDialog;
  },
  setLoading(state) {
    state.loading = !state.loading;
  },
  setDeleteDialog(state) {
    state.deleteDialog = !state.deleteDialog;
  },
  setSuccess(state, message) {
    state.snackbar = !state.snackbar;
    state.snackbarColor = "success";
    state.message = message
  },
  setError(state, message) {
    state.snackbar = !state.snackbar;
    state.snackbarColor = "error";
    state.message = message;
  },
  closeSnackbar(state) {
    state.snackbar = false;
  },
  setCount(state, value) {
    state.count = value;
  },
  setUser(state, user) {
    state.user = user;
  },

}
export const actions = {
  async getProducts({ commit }, pagination) {
    try {
      const products = await this.$axios.$get(`/api/products/${(pagination.page - 1) * pagination.itemsPerPage}/${pagination.itemsPerPage}`);
      commit('setCount', products.count);
      commit('setItems', products.data);
    } catch (error) {
      commit("setError", "Ha ocurrido un error inesperado");
    }
  },

  async getProduct({ commit }, id) {
    try {
      const products = await this.$axios.$get(`/api/product/${id}`);
      commit('setItems', products);
    } catch (error) {
      commit("setError", "Ha ocurrido un error inesperado");
    }
  },

  async saveProduct({ commit }, item) {
    try {
      await this.$axios.$post('/api/product/create', item);
      commit("setSuccess", "Producto agregado exitosamente");
    } catch (error) {
      commit("setError", "Ha ocurrido un error al intentar agregar el producto");
    }

  },

  async updateProduct({ commit }, item) {
    try {
      await this.$axios.$put(`/api/product/update/${item._id}`, item);
      commit("setSuccess", "Producto modificado exitosamente");
    } catch (error) {
      commit("setError", "Ha ocurrido un error al modificar el producto");
    }
  },

  async searchProducts({ commit }, search) {
    try {
      commit('setLoading');
      let products = [];
      if (search.length > 0) {
        products = await this.$axios.$get(`/api/products/${search}`);
      } else {
        products = await this.$axios.$get(`/api/products/0/10`);
      }
      commit('setCount', products.count);
      commit('setItems', products.data);
      commit('setLoading');
    } catch (error) {
      commit("setError", "Ha ocurrido un error inesperado");
    }
  },

  async getMixtures({ commit }, pagination) {
    try {
      const mixtures = await this.$axios.$get(`/api/mixture/${(pagination.page - 1) * pagination.itemsPerPage}/${pagination.itemsPerPage}`);
      commit('setCount', mixtures.count);
      commit('setItems', mixtures.data);
    } catch (error) {
      commit("setError", "Ha ocurrido un error inesperado");
    }
  },

  async searchMixtures({ commit }, search) {
    try {
      commit('setLoading');
      let products = [];
      if (search.length > 0) {
        products = await this.$axios.$get(`/api/mixtures/${search}`);
      } else {
        products = await this.$axios.$get(`/api/mixture/0/10`);
      }
      commit('setCount', products.count);
      commit('setItems', products.data);
      commit('setLoading');
    } catch (error) {
      commit("setError", "Ha ocurrido un error inesperado");
    }
  },

  async getProviders({ commit }, pagination) {
    try {
      console.log(pagination);
      const providers = await this.$axios.$get(`/api/providers/${(pagination.page - 1) * pagination.itemsPerPage}/${pagination.itemsPerPage}`);
      commit("setCount", providers.count)
      commit('setItems', providers.data);
    } catch (error) {
      commit("setError", "Ha ocurrido un error al modificar el producto");
    }
  },

  async saveProvider({ commit }, item) {
    try {
      await this.$axios.$post('/api/provider/create', item);
      commit("setSuccess", "Proveedor agregado exitosamente");
    } catch (error) {
      commit("setError", "Ha ocurrido un error al intentar agregar el producto");
    }
  },

  async updateProvider({ commit }, item) {
    try {
      await this.$axios.$put(`/api/provider/update/${item._id}`, item);
      commit("setSuccess", "Proveedor modificado exitosamente");
    } catch (error) {
      commit("setError", "Ha ocurrido un error al modificar el proveedor");
    }
  },

  async searchProviders({ commit }, search) {
    try {
      commit('setLoading');
      let providers = [];
      if (search.length > 0) {
        providers = await this.$axios.$get(`/api/providers/${search}`);
      } else {
        providers = await this.$axios.$get(`/api/providers/0/10`);
      }
      commit('setCount', providers.count);
      commit('setItems', providers.data);
      commit('setLoading');
    } catch (error) {
      commit("setError", "Ha ocurrido un error inesperado");
    }
  },

  async getOrders({ commit }, pagination) {
    try {
      const orders = await this.$axios.$get(`/api/orders/${(pagination.page - 1) * pagination.itemsPerPage}/${pagination.itemsPerPage}`);
      commit("setCount", orders.count)
      commit('setItems', orders.data);
    } catch (error) {
      commit("setError", "Ha ocurrido un error");
    }
  },

  async getSupplyOrders({ commit }, pagination) {
    try {
      const orders = await this.$axios.$get(`/api/supplyOrders/${(pagination.page - 1) * pagination.itemsPerPage}/${pagination.itemsPerPage}`);
      commit("setCount", orders.count)
      commit('setItems', orders.data);
    } catch (error) {
      commit("setError", "Ha ocurrido un error");
    }
  },

  async getHistoryOrders({ commit }, pagination) {
    try {
      const orders = await this.$axios.$get(`/api/orders/history/${(pagination.page - 1) * pagination.itemsPerPage}/${pagination.itemsPerPage}`);
      commit("setCount", orders.count)
      commit('setItems', orders.data);
    } catch (error) {
      commit("setError", "Ha ocurrido un error");
    }
  },

  async sharedSearch({ commit }, searchUrl) {
    try {
      console.log(searchUrl);
      const search = await this.$axios.$get(`${searchUrl}`);
      commit("setCount", search.count)
      commit('setItems', search.data);
    } catch (error) {
      commit("setError", "Ha ocurrido un error");
    }
  },

  async saveOrder({ commit }, item) {
    try {
      await this.$axios.$post('/api/order/create', item);
      commit("setSuccess", "Pedido agregado exitosamente");
    } catch (error) {
      commit("setError", "Ha ocurrido un error al intentar agregar el pedido");
    }
  },

  async getUsers({ commit }, pagination) {
    try {
      const users = await this.$axios.$get(`/api/users/${(pagination.page - 1) * pagination.itemsPerPage}/${pagination.itemsPerPage}`);
      commit("setCount", users.count)
      commit('setItems', users.data);
    } catch (error) {
      commit("setError", "Ha ocurrido un error");
    }
  },

}