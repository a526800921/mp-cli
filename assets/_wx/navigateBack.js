/**
 * @method: navigateBack - 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages()) 获取当前的页面栈，决定需要返回几层。
 * @param: {Number} delta - 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
 * @param: {Object} options - 其他选项
 * @return: Promise
 * @other: 在页面没跳转之前多次调用会报错
  */

export default store => {

  return (delta, options = {}) => {
    if (store.palmRejection) {
      store.dispatch('updatePalmRejection', false)

      return new Promise((resolve, reject) => {
        wx.navigateBack({
          delta,
          ...options,
          success: resolve,
          fail: reject,
        })
      })
    }
  }
}