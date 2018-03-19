//index.js
//获取globalData实例
const { store, wxApi } = getApp().globalData

Page({
  data: {

  },
  onLoad() {

  },
  onReady() {
    wxApi.showModal({
      title: 'Hello',
      content: 'World!',
    })
  }
})
