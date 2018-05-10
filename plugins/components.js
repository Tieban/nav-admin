import Vue from 'vue'
import Toast from '../components/Toast.vue'

const components = { Toast }

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
