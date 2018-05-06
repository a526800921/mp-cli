// components/Input/Input.js
// 双向绑定组件
import behaviors from '../../../behaviors/index.js'
const { _Component } = getApp().globalData

_Component({
  behaviors: [behaviors.viewModel],

  /**
   * 组件的属性列表
   */
  properties: {
    max: { // 最大值
      type: Number,
      value: 0
    },

    value: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'text'
    },
    password: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    },
    maxlength: {
      type: Number,
      value: 140
    },
    cursorSpacing: {
      type: Number,
      value: 0
    },
    focus: {
      type: Boolean,
      value: false
    },
    confirmType: {
      type: String,
      value: 'next'
    },
    confirmHold: {
      type: Boolean,
      value: false
    },
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
    _bindblur(e) {
      this.triggerEvent('blur', e.detail)
    },
    _bindfocus(e) {
      this.triggerEvent('focus', e.detail)
    },
    _bindinput(e) {
      const { value, cursor } = e.detail
      const { max } = this.properties
      let lastValue = value

      max > 0 && (lastValue = value > max ? max : value)

      // 绑定数据处理
      this._viewModel_(lastValue)

      this.triggerEvent('input', { value: lastValue, cursor })

      return lastValue
    },
    _bindconfirm(e) {
      this.triggerEvent('confirm', e.detail)
    }
  }
})
