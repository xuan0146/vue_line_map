import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Map',
    component: () => import('@/pages/map_line.vue'),
    meta: {title: '地图：流线'}
  },
  {
    path: '/mapinit',
    name: 'MapInit',
    component: () => import('@/pages/map_init.vue'),
    meta: {title: '地图：初始化'}
  }
]

const router = new VueRouter({
  routes
})

export default router
