import Vue from 'vue'
import App from './App.vue'
import Store from './store/index.js'
import Router from './router/index.js'
import Axios from 'axios'

import Animate from 'animate.css';


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use( ElementUI );
Vue.prototype.$http = Axios

new Vue({
    el: '#app',
    store: Store,
    router: Router,
    render: h => h(App)
});

