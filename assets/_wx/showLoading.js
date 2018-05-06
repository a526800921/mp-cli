/**
 * @method: showLoading - 显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框
 * @param: {String} title - 提示的内容
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (title = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}