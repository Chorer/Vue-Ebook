import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang'

// 全局引入字体图标、样式重置
import 'assets/styles/icon.css'
import 'assets/styles/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
