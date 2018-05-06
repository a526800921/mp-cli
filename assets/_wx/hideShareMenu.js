/**
 * @method: hideShareMenu - 隐藏转发按钮
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.hideShareMenu({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}