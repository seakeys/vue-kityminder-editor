import Vue from 'vue'
import App from './App.vue'
import kityMinder from './../packages/kityMinder'
Vue.use(kityMinder)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
