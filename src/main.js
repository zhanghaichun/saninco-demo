import Vue from 'vue'
import App from './App.vue'
// import App from './components/001.vue'
import Store from './store/index.js'

// import './components/global.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use( ElementUI )

new Vue({
  el: '#app',
  store: Store,
  render: h => h(App)
})

