/**
 * @method: hideTabBar - 隐藏 tabBar
 * @param: {Boolean} animation - 是否需要动画效果
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (animation = true, options = {}) => {
  return new Promise((resolve, reject) => {
    wx.hideTabBar({
      animation,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}