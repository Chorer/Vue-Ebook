import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/ebook'
  },
  {
    path:'/ebook/:fileName',
    component: () => import('views/Ebook/index')
  }
]

const router = new VueRouter({
  routes
})

export default router
