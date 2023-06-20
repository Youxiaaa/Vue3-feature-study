import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/defineModel',
    component: () => import('@/views/01_defineModel/index.vue')
  },
  {
    path: '/useAttrs',
    component: () => import('@/views/02_useAttrs/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  // 下面这个 可以写成ES6的简写 routers
  routes:routes
})

export default router
