/**
 * @method: startPullDownRefresh - 开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.startPullDownRefresh({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}