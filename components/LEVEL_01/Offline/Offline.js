// components/Offline/Offline.js
const { _wx, _Component } = getApp().globalData

_Component({
  /**
   * 组件的属性列表
   */
  properties: {
    offline: { // 无网络
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _reset() {
      this._redirectTo()
    },
    _redirectTo() {
      // 刷新页面
      let { route, options } = getCurrentPages().pop(),
        query = Object.entries(options).map(item => `${item[0]}=${item[1]}`).join('&')

      query && (query = `?${query}`)

      _wx.redirectTo(`/${route}${query}`)
        .catch(res => {
          // tabbar界面
          (/tabbar/i).test(res.errMsg) && _wx.reLaunch(`/${route}?${query}`)
        })
    }
  }
})
