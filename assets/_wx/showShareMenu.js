/**
 * @method: showShareMenu - 显示当前页面的转发按钮
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.showShareMenu({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}