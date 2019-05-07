import router from './router'
import store from './store'
import { Toast } from 'vant'
import { getToken } from '@/utils/auth'
import getPageTitle from '@/utils/page_title'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
    // 设置页面标题title
    document.title = getPageTitle(to.meta.title)

    next()
})