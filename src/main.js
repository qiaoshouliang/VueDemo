// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './icons'
import 'src/utils/tools'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'src/styles/index.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(ElementUI)
new Vue({
  el: '#app',
  store,
  router,
  ElementUI,
  template: '<App/>',
  components: { App }
})
