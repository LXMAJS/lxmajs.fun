import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    // 设备信息
    WasherId: localStorage.getItem('WasherId') ? localStorage.getItem('WasherId') : '',
    ThirdUserId: localStorage.getItem('ThirdUserId') ? localStorage.getItem('ThirdUserId') : '',

    // 用户信息
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    UserName: localStorage.getItem('UserName') ? localStorage.getItem('UserName') : '',
    UserInfo: localStorage.getItem('UserInfo') ? JSON.parse(localStorage.getItem('UserInfo')) : {},
    isAnonymous: localStorage.getItem('isAnonymous') ? JSON.parse(localStorage.getItem('UserInfo')) : false
  },

  getters: {
    // 设备信息
    washerId: (state) => state.WasherId,
    thirdUserId: (state) => state.ThirdUserId,

    // 用户信息
    userName: (state) => state.UserName,
    userInfo: (state) => state.UserInfo,
    isLogin: (state) =>
      (state.Authorization !== 'undefined' &&
        state.Authorization !== '' &&
        state.UserName !== 'undefined' &&
        state.UserName !== ''),
    isAnonymous: (state) => state.isAnonymous
  },

  mutations: {
    saveBasicInfo(state, info) {
      // 存储基础信息，包含设备信息和用户的访问信息
      if (info && info.WasherId !== 'undefined' && info.ThirdUserId !== 'undefined') {
        state.WasherId = info.WasherId
      state.ThirdUserId = info.ThirdUserId
      localStorage.setItem('WasherId', info.WasherId)
      localStorage.setItem('ThirdUserId', info.ThirdUserId)
    }
  },

  changeLogin(state, user) {
    state.Authorization = user.Authorization
    localStorage.setItem('Authorization', user.Authorization)

    if (user.UserInfo) {
      state.UserName = user.UserInfo.mobile1
      state.UserInfo = user.UserInfo

      localStorage.setItem('UserName', state.UserName)
      localStorage.setItem('UserInfo', JSON.stringify(user.UserInfo))

      // 设置为不是匿名
      state.isAnonymous = false
      localStorage.setItem('isAnonymous', state.isAnonymous)
    }
  },

  anonymous(state) {
    state.isAnonymous = true
    localStorage.setItem('isAnonymous', state.isAnonymous)
  },

  resetState(state) {
    localStorage.removeItem('Authorization')
    localStorage.removeItem('UserName')
    localStorage.removeItem('UserInfo')
    localStorage.removeItem('isAnonymous')

    // 同事清除第三方userid
    // localStorage.removeItem('WasherId')
    // localStorage.removeItem('ThirdUserId')

    // 清除所有localstorage
    // localStorage.clear()
  }
}
})

export default store
