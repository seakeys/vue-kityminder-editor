import kityMinder from './src/minder.vue'

kityMinder.install = function (Vue) {
  Vue.component(kityMinder.name, kityMinder)
}

export default kityMinder