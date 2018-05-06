/**
 * @method: getClipboardData - 设置系统剪贴板的内容
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (data = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.getClipboardData({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}