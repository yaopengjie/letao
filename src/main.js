import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'

import axios from 'axios'
import { Lazyload } from 'vant'
Vue.config.productionTip = false
Vue.use(Lazyload, {
  lazyComponent: true
})

Vue.prototype.$api = axios

new Vue({
  router,
  render: h => h(App)

}).$mount('#app')
