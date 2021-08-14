

export const state = () => ({
  items: [],
  editItem: {},
  dialog: false,
  editDialog: false,
  deleteDialog: false,
  loading: false,
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

}
export const actions = {
  async getProducts({ commit }, pagination) {
    const products = await this.$axios.$get('/api/products');
    console.log(products);
    commit('setItems', products);
  },

  async saveProduct({ commit }, item) {
    console.log(item);
    const product = await this.$axios.$post('/api/product/create', item);
    console.log(product);
  },

  async updateProduct({ commit }, item) {
    console.log(item);
    const product = await this.$axios.$put(`/api/product/update/${item._id}`, item);
    console.log(product);
  },

}