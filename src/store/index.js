import Vue from 'vue'
import Vuex from 'vuex'
import state from 'store/state'
import getters from 'store/getters'
// 所有 mutations
import mutations from 'store/mutations'
// 所有 actions
import actions from 'store/actions'
// book模块（只保留state）
import book from 'store/modules/book'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules:{
    book
  }
})
