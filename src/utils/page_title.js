import defaultSettings from '@/setting'

const title = defaultSettings.title || 'LXMAJS.FUN'

export default getPageTitle = (pageTitle) => {
    if (pageTitle) {
        return `${pageTitle} - ${title}`
    }
    return `${title}`
}