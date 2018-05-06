/**
 * @method: showTabBarRedDot - 显示 tabBar 某一项的右上角的红点
 * @param: {Number} index - tabBar的哪一项，从左边算起
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (index = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.showTabBarRedDot({
      index,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}