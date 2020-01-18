import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/routers'
import ElementUI from 'element-ui';
import Cookies from 'js-cookie'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/scss/font-awesome.scss'
import "@/styles/index.scss"
Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: Cookies.get('size') || 'small' // set element-ui default size
})
import './router/index' // permission control
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
