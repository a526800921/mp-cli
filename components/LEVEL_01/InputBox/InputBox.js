// components/InputBox/InputBox.js
/*
 * @Author: Jafish 
 * @Date: 2018-03-26 10:39:55
 * @Action: 表单input容器
 * @Param: {String} title - 左边的文字
 * @Param: {Boolean} isRequired - 是否必填（红色的 * ）
 * @SLot: 右边的内容是slot
 */
const { _Component } = getApp().globalData

_Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: { // 左边文字
      type: String,
      value: '个人名称'
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

  }
})
