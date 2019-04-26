import Vue from 'vue'
import Router from 'vue-router'
import gallery from '@/views/gallery'
import test from '@/views/test'
import chat from '@/views/chat'

import store from '@/utils/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: gallery
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: gallery
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})

// // 导航守卫
// // 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登录
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next()
//   } else {
//     let token = localStorage.getItem('Authorization')
//     if (token === null || token === 'null' || token === '' || token === undefined) {
//       let isAnonymous = localStorage.getItem('isAnonymous')
//       if (isAnonymous) {
//         next()
//       } else {
//         if (to.query) {
//           store.commit("saveBasicInfo", to.query);
//         }
//         next({ path: '/login', params: to.query })
//       }
//     } else {
//       // 否则，执行页面跳转
//       next()
//     }
//   }
// })

export default router
