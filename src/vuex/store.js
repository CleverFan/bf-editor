/**
 * Created by chengfan on 2017/4/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)


const store = new Vuex.Store({
  // 定义状态
  state,
  mutations,
  actions,
})

export default store
