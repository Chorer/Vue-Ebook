import Vue from 'vue'
import Vuex from 'vuex'
import state from 'store/state'
import getters from 'store/getters'
import mutations from 'store/mutations'
import actions from 'store/actions'
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
