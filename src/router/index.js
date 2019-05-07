import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error/404'),
    hidden: true
  },
  {
    path: '/',
    redirect: '/demo',
    component: Layout,
    children: [{
      path: 'demo',
      name: 'Default',
      meta: { title: '主页', icon: 'demo' },
      component: () => import('@/views/demo/index')
    }]
  },
  {
    path: '/gallery',
    redirect: '/gallery/index',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Default',
      meta: { title: '画廊', icon: 'dashboard' },
      component: () => import('@/views/gallery/index')
    }]
  },
  {
    path: '/chat',
    redirect: '/chat/index',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Default',
      meta: { title: '聊天室', icon: 'dashboard' },
      component: () => import('@/views/chat/index')
    }]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }

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
