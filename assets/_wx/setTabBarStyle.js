/**
 * @method: setTabBarStyle - 动态设置 tabBar 的整体样式
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.setTabBarStyle({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}