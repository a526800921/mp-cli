/**
 * @method: setTabBarBadge - 为 tabBar 某一项的右上角添加文本
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.setTabBarBadge({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}