/*
计数器状态管理
 */

import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user.js'
import actions from './actions.js'
import getters from './getters.js'
import state from './state.js'

Vue.use( Vuex );



export default new Vuex.Store({
    state,
    actions,
    getters,
    modules: {
        user
    }
  
})