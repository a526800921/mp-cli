//app.js
import httpApi from './assets/httpApi/index.js'
import field from './assets/field_options/index.js'
import _console from './assets/_console/index.js'
import utils from './utils/index.js'

import store from './store/index.js'
import _wx from './assets/_wx/index.js'
import _Page from './assets/_Page/index.js'
import _Component from './assets/_Component/index.js'

// 新增引用
const _console_control = { ..._console }
store.dispatch('updateConsoleControl', true, _console_control) // 生产环境需要注释

// 注入stroe
const _wx_store = _wx(store, { _console: _console_control })
const _Page_store = _Page(store)
const _Component_store = _Component(store)

// 开启调试
wx.setEnableDebug({
  enableDebug: true
})

App({
  onLaunch() {

    // 获取系统信息
    _wx_store.getStorage('systemInfo', { sync: true }).then(res => {
      if (res) return store.dispatch('updateSystemInfo', res)
      // 没有则存储
      _wx_store.getSystemInfo({ sync: true }).then(res2 => {
        store.dispatch('updateSystemInfo', res2)

        _wx_store.setStorage('systemInfo', res2)
      })
    })

    // 获取网络状态
    _wx_store.getNetworkType().then(res => res.networkType === 'none' && store.dispatch('updateOnline', false))

    // 监听网络变化
    _wx_store.onNetworkStatusChange(res => store.dispatch('updateOnline', res.isConnected))

    _console_control.log('全局状态store：', store)
  },
  globalData: {
    httpApi, // 请求接口
    store, // 全局状态
    utils, // 工具类
    field, // 字段配置
    control: { // 控制
      _console: _console_control, // console
    },

    _wx: _wx_store, // 封装后的微信api
    _Page: _Page_store, // 封装后的 Page 方法
    _Component: _Component_store, // 封装后的 Component 方法
  }
})