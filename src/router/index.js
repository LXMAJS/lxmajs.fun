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
    component: Layout,
    meta: { title: '主页', icon: 'dashboard' }
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Layout,
    meta: { title: '画廊', icon: 'dashboard' }
  },
  {
    path: '/chat',
    name: 'chat',
    component: Layout,
    meta: { title: '聊天室', icon: 'dashboard' }
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test'),
    meta: { title: '测试页面', icon: 'dashboard' }
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
