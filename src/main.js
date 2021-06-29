import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import './plugins/iemenuerr.js'
import './plugins/element.js'
import '@/theme/index.css';
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
//后端环境地址
// axios.defaults.baseURL = 'https://yun.hrbsti.com/';
// axios.defaults.baseURL = 'http://127.0.0.1:9094/';
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
