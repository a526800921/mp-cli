/**
 * @method: showToast - 显示消息提示框
 * @param: {String} title - 提示的内容
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (title = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.showToast({
      title,
      icon: 'none',
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}