import Vue from 'vue'
import Vuex from 'vuex'
import { alert } from './alert.module.js';
import { auth } from './auth.module.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    alert,
    auth
  }
})
