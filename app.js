//app.js
import httpApi from './assets/httpApi/index.js'
import store from './store/index.js'
import utils from './utils/index.js'

import _wx from './assets/_wx/index.js'
import _Page from './assets/_Page/index.js'

// const _wx_Store = _wx(store, httpApi)
// const _Page_Store = _Page(store)

App({
  onLaunch() {


    wx.getSystemInfo({
      success(res) {
        console.log('获取系统信息：', res)
        store.dispatch('updateSystemInfo', res)

        console.log('全局状态store：', store)
      },
    })
  },
  globalData: {
    httpApi, // 请求接口
    store, // 全局状态
    utils, // 工具类
  }
})