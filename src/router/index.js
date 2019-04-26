import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/404',
    component: () => import('@/views/error/404')
  },
  {
    path: '/',
    name: 'default',
    component: Layout
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Layout
  },
  {
    path: '/chat',
    name: 'chat',
    component: Layout
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test')
  }
]

// 模仿vue-admin-template写的
const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
