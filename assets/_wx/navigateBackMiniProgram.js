/**
 * @method: navigateBackMiniProgram - 返回到上一个小程序，只有在当前小程序是被其他小程序打开时可以调用成功
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.navigateBackMiniProgram({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}