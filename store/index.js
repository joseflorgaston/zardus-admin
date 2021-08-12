

export const state = () => ({
    items: [],
    editItem: {},
    dialog: false,
    editDialog: false,
    deleteDialog: false,
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
    setDeleteDialog(state) {
      state.deleteDialog = !state.deleteDialog;
    },
    
  }
  export const actions = {
      
      }
  