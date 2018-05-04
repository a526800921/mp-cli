// wx.navigateTo 在页面没跳转之前多次调用会报错

export default function (store) {
  return function navigateTo(config = {}) {
    if (store.palmRejection) {
      store.updatePalmRejection(false)

      wx.navigateTo({
        ...config,
      })
    }
  }
}