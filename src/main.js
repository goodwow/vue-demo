// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import apiConfig from '../config/api.config'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'

Vue.use(VueAxios, Axios)
Vue.prototype.$qs = qs
Axios.defaults.baseURL = apiConfig.baseUrl

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
