// components/Picker/Picker.js
import behaviors from '../../../behaviors/index.js'
const { _Component } = getApp().globalData

_Component({
  behaviors: [behaviors.viewModel],
  externalClasses: ['option-css-main'],
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder: {
      type: String,
      value: ''
    },
    rangeValue: { // 用来非展示的字段，如id
      type: String,
      value: ''
    },
    rangeKey: { // 用来展示的字段
      type: String,
      value: ''
    },

    mode: {
      type: String,
      value: 'selector'
    },
    range: {
      type: Array,
      value: [],
      observer: '_setDataRange'
    },
    value: {
      type: null,
      value: 0,
      // observer: '_setData'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    start: {
      type: String,
      value: ''
    },
    end: {
      type: String,
      value: ''
    },
    fields: {
      type: String,
      value: 'day'
    },
    customItem: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    _showValue: '',
    _indexValue: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _bindchange(e) {
      const { value } = e.detail
      const { mode } = this.properties

      // 获取处理后的值，如id
      const lastValue = this[`_${mode}`](value)

      // 绑定数据处理
      this._viewModel_(lastValue.value)

      // 展示处理
      this.setData({ _showValue: lastValue.label })

      this.triggerEvent('change', { value: lastValue.value })
    },
    _bindcancel(e) {
      this.triggerEvent('cancel', e.detail)
    },
    _bindcolumnchange(e) {
      this.triggerEvent('columnchange', e.detail)
    },

    // 展示处理-----------------------------------------
    _selector(value) {
      const { range, rangeKey, rangeValue } = this.properties

      return {
        label: rangeKey ? range[value][rangeKey] : range[value],
        value: rangeKey ? range[value][rangeValue || rangeKey] : range[value]
      }
    },
    _multiSelector(value) {
      const { range, rangeKey, rangeValue } = this.properties

      if (rangeKey) return {
        label: value.map((item, index) => range[index][item][rangeKey]).join(' '),
        value: value.map((item, index) => range[index][item][rangeValue || rangeKey])
      }

      const data = value.map((item, index) => range[index][item])
      return {
        label: data.join(' '),
        value: data
      }
    },
    _time(value) {
      return {
        label: value,
        value
      }
    },
    _date(value) {
      return {
        label: value,
        value
      }
    },
    _region(value) {
      return {
        label: value.join(' '),
        value
      }
    },

    // 设置值处理---------------------------------------
    _setDataRange(newValue) {
      const { value } = this.properties

      // 列表值驱动选中值
      this._setData(value)
    },
    _setData(newValue) {
      const { mode } = this.properties

      // 获取传入值在列表中的下标
      const index = this[`_${mode}Set`](newValue)

      // index === false 下标不存在
      this.setData({
        _indexValue: index === false ? 0 : index,
        _showValue: index === false ? '' : this[`_${mode}`](index).label
      })
    },
    _selectorSet(value) {
      const { range, rangeKey, rangeValue } = this.properties

      let data = rangeKey ?
        range.findIndex(item => item[rangeValue || rangeKey] == value) :
        range.findIndex(item => item == value)

      return data === -1 ? false : data
    },
    _multiSelectorSet(value) {
      const { range, rangeKey, rangeValue } = this.properties

      let data = rangeKey ?
        range.map(item => item.findIndex(item2 => item2[rangeValue || rangeKey] == value)) :
        range.map(item => item.findIndex(item2 => item2 == value))

      return data.every(item => item !== -1) ? data : false
    },
    _timeSet(value) {
      return value
    },
    _dateSet(value) {
      return value
    },
    _regionSet(value) {
      return value
    },
  }
})
