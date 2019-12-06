/**
 * create by hy ON 2019/10/9
 */
import Vue from 'vue'
import Vuex from 'vuex'
import VueLs from 'vue-ls'
import stepForm from '@/store/modules/stepForm'
import login from '@/store/modules/login'
import permission from '@/store/modules/route'

Vue.use(Vuex)
Vue.use(VueLs)

export default new Vuex.Store({
  modules: {stepForm, login, permission},
})
