import Axios from 'axios'

const axios = Axios.create({
    baseURL: '/',
    timeout: 10000
})

// axios 基本配置
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // if (localStorage.getItem('Authorization')) {
        //     config.headers.Authorization = localStorage.getItem('Authorization')
        // }
        return config
    },
    error => {
        return Promise.reject(error)
    })

// 响应拦截器
axios.interceptors.response.use(
    res => {
        if (res.data && res.data.isSuccess) {
            return res;
        } else {
            console.error("接口异常：" + res.data)
            return Promise.reject(res)
        }
    },
    error => {
        console.error("服务器异常")
        return Promise.reject(error)
    }
)

export default axios 