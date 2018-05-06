// components/Textarea/Textarea.js
// 双向绑定组件
import behaviors from '../../../behaviors/index.js'
const { store, _Component } = getApp().globalData

_Component({
  behaviors: [behaviors.viewModel],

  /**
   * 组件的属性列表
   */
  properties: {
    row: { // 展示的行数量
      type: Number,
      value: 4
    },
    size: { // 字体大小
      type: Number,
      value: 30
    },
    optionStyle: { // 行内样式
      type: String,
      value: ''
    },

    value: {
      type: String,
      value: ''
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
    focus: {
      type: Boolean,
      value: false
    },
    autoHeight: {
      type: Boolean,
      value: false
    },
    fixed: {
      type: Boolean,
      value: false
    },
    cursorSpacing: {
      type: Number,
      value: 0
    },
    showConfirmBar: {
      type: Boolean,
      value: false
    },
    adjustPosition: {
      type: Boolean,
      value: true
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    _value: '',
    _isIOS: false
  },
  ready() {
    this.setData({ _isIOS: store.systemInfo.isIOS })
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
    _bindlinechange(e) {
      this.triggerEvent('linechange', e.detail)
    },
    _bindinput(e) {
      const { value, cursor } = e.detail

      // 绑定数据处理
      this._viewModel_(value)

      this.triggerEvent('input', { value, cursor })
    },
    _bindconfirm(e) {
      this.triggerEvent('confirm', e.detail)
    }
  }
})
