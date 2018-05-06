/**
 * @method: switchTab - 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
 * @param: {String} url - 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数
 * @param: {Object} options - 其他选项
 * @return: Promise
 * @other: 在页面没跳转之前多次调用会报错
  */

export default store => {

  return (url, options = {}) => {
    if (store.palmRejection) {
      store.dispatch('updatePalmRejection', false)

      return new Promise((resolve, reject) => {
        wx.switchTab({
          url,
          ...options,
          success: resolve,
          fail: reject,
        })
      })
    }
  }
}