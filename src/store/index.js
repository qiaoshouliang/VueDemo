import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/permission'
import test from './modules/test'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    permission,
    test
  },
  getters
})

export default store

