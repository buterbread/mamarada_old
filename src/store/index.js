import Vue from 'vue';
import Vuex from 'vuex';
import languages from './languages';
import cosmetics from './cosmetics';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    languages,
    cosmetics,
  },

  mutations: {},
  actions: {},
  getters: {},
})
