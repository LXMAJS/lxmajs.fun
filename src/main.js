// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/utils/store'
import filters from '@/utils/filters'
import global from '@/utils/global_variable'

import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'
Vue.use(Toast);

import 'vant/lib/index.css';
import Vant from 'vant'
Vue.use(Vant);

// 设置过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.config.productionTip = false

// 设置全局常量、全局变量
Vue.prototype.GLOBAL = global

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Toast,
  Vant,
  components: { App },
  template: '<App/>'
})
