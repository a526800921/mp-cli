// components/PageLoadmore/PageLoadmore.js
const { _Component } = getApp().globalData

_Component({
  /**
   * 组件的属性列表
   */
  properties: {
    load: { // 固定传入：  __loadList
      type: Object,
      value: []
    },
    index: {  // 固定传入：  __tabIndex
      type: Number,
      value: 0
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

  }
})
