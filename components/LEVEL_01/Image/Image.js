// components/Image/Image.js
const { _Component } = getApp().globalData

_Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: {
      type: String,
      value: '/assets/image/logo.jpg',
      observer() { this.setData({ _errSrc: '' }) }
    },
    mode: {
      type: String,
      value: 'aspectFill'
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    _errSrc: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _binderror(e) {
      this.setData({ _errSrc: '/assets/image/logo.jpg' })

      this.triggerEvent('error', e.detail)
    },
    _bindload(e) {
      // 加载完成
      this.triggerEvent('load', e.detail)
    }
  }
})
