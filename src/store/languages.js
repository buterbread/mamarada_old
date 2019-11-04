export default {
  namespaced: true,

  state: {
    language: '',
  },

  mutations: {
    SET_LANG(state, locale) {
      state.language = locale;
    },
  },

  actions: {
    setLanguage(state, locale) {
      const { commit } = state;
      commit('SET_LANG', locale);

      window.localStorage.setItem('locale', locale);
    },
  },

  getters: {
    language(state) {
      return state.language
    },
  },
};
