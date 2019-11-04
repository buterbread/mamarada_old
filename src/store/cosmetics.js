import api from '../generateApi';

export default {
  namespaced: true,

  state: {
    loading: false,
    list: [],
    item: {},
    errors: [],
    timestamp: null,
  },

  mutations: {
    SET_LIST(state, data) {
      state.list = data;
    },

    SET_ITEM(state, data) {
      state.item = data;
    },
  },

  actions: {
    async fetchListData({ commit, dispatch, getters }, options = {}) {
      const response = await api.cosmetics.getListData();
      const { errors, data } = response;

      commit('SET_LIST', data);
    },

    async fetchItemData({ commit, dispatch, getters }, id) {
      const response = await api.cosmetics.getItemData(id);
      const { errors, data } = response;

      commit('SET_ITEM', data);
    },
  },

  getters: {
    list(state) {
      return state.list
    },
    item(state) {
      return state.item
    }
  },
};
