/**
 * @method: removeTabBarBadge - 动态设置当前页面的标题
 * @param: {Number} index - tabBar的哪一项，从左边算起
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (index = 0, options = {}) => {
  return new Promise((resolve, reject) => {
    wx.removeTabBarBadge({
      index,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}