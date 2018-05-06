/**
 * @method: setTabBarItem - 动态设置 tabBar 某一项的内容
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.setTabBarItem({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}