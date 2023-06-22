import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/defineModel',
    component: () => import('@/views/01_defineModel/index.vue')
  },
  {
    path: '/useAttrs',
    component: () => import('@/views/02_useAttrs/index.vue')
  },
  {
    path: '/defineExpose',
    component: () => import('@/views/03_defineExpose_$parent/index.vue')
  },
  {
    path: '/slot',
    component: () => import('@/views/04_slot/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
