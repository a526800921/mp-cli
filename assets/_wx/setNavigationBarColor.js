/**
 * @method: setNavigationBarColor - 设置导航栏样式
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (ptions = {}) => {
  return new Promise((resolve, reject) => {
    wx.setNavigationBarColor({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}