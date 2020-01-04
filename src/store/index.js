import Vue from 'vue'
import Vuex from 'vuex'
import locales from './locales'
import cosmetics from './cosmetics'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    locales,
    cosmetics
  },

  mutations: {},
  actions: {},
  getters: {}
})
