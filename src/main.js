import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局引入字体图标、样式重置
import 'assets/styles/icon.css'
import 'assets/styles/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
