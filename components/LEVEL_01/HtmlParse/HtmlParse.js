// components/HtmlParse/HtmlParse.js
/*
 * @Author: Jafish 
 * @Date: 2018-03-20 15:24:17
 * @Action: 富文本解析
 * @Param: {String} html - 需要解析的富文本
 */
import _wxParse from '../../../utils/wxParse/wxParse.js'
const { _Component } = getApp().globalData

_Component({
  /**
   * 组件的属性列表
   */
  properties: {
    html: {
      type: String,
      value: '',
      observer(newValue) {
        newValue && _wxParse.wxParse('article', 'html', newValue, this, 0)
      }
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
