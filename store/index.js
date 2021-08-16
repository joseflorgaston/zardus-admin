

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

}
export const actions = {
  async getProducts({ commit }, pagination) {
    try {
      const products = await this.$axios.$get('/api/products');
    commit('setItems', products);
    } catch (error) {
      commit("setError", "Ha ocurrido un error al modificar el producto");
    }
  },

  async getProducts({ commit }, pagination) {
    try {
      const products = await this.$axios.$get('/api/products');
    commit('setItems', products);
    } catch (error) {
      commit("setError", "Ha ocurrido un error al modificar el producto");
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
      const providers = await this.$axios.$get('/api/providers');
      commit('setItems', providers);
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

}