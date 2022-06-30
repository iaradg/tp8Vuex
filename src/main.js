import Vue from 'vue'
import App from './App.vue'
import './form'
import {router} from './router'
/* AXIOS( vue-axios)*/
import './axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

