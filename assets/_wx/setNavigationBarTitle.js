/**
 * @method: setNavigationBarTitle - 动态设置当前页面的标题
 * @param: {String} title - 页面标题
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (title = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.setNavigationBarTitle({
      title,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}