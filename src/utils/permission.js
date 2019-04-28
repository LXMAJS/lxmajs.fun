import store from '@/store'

export default checkPermission = (val) => {
    if (val && val instanceof Array && val.length > 0) {
        const roles = store.getters && store.getters.roles
        const permissionRoles = val

        // 是否有权限
        const hasPermission = roles.some(role => {
            return permissionRoles.includes(role)
        })

        if (!hasPermission) {
            return false
        }
        return true
    } else {
        console.log(`need roles! Like v-permission="['admin', 'anonymous']"`)
        return false
    }
}