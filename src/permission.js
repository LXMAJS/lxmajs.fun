import router from './router'
import store from './store'
import { Toast } from 'vant'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import getPageTitle from '@/utils/page_title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
    // 开始进度条
    NProgress.start();

    // 设置页面标题title
    document.title = getPageTitle(to.meta.title)

    /**
     * 简单处理
     */
    next()
    return

    const hasToken = getToken()

    if (hasToken) {
        if (to.path === '/login') {
            // 有token
            next({ path: '/' })
            NProgress.done()
        } else {
            const hasGetUserInfo = store.getters.name
            if (hasGetUserInfo) {
                next()
            } else {
                try {
                    await store.dispatch('user/getInfo')
                    next()
                } catch (error) {
                    await store.dispatch('user/resetToken')
                    Toast.fail(error || '有妖气，请稍等')
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            }
        }
    } else {
        // 无token
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})

/**
 * 
 */
router.afterEach(() => {
    // 结束进度条的展示
    NProgress.done()
})