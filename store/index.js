

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

}
export const actions = {
  async getProducts({ commit }, pagination) {
    try {
      const products = await this.$axios.$get(`/api/products/${(pagination.page-1)*pagination.itemsPerPage}/${pagination.itemsPerPage}`);
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

  async getProviders({ commit }, pagination) {
    try {
      console.log(pagination);
      const providers = await this.$axios.$get(`/api/providers/${(pagination.page-1)*pagination.itemsPerPage}/${pagination.itemsPerPage}`);
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

  async getOrders({ commit }, pagination) {
    try {
      const orders = await this.$axios.$get(`/api/orders/${(pagination.page-1)*pagination.itemsPerPage}/${pagination.itemsPerPage}`);
      commit("setCount", orders.count)
      commit('setItems', orders.data);
      console.log(orders.data)
    } catch (error) {
      commit("setError", "Ha ocurrido un error al modificar el producto");
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

}