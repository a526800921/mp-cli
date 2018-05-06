/**
 * @method: setClipboardData - 设置系统剪贴板的内容
 * @param: {String} data - 需要设置的内容
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (data = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.setClipboardData({
      data,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}