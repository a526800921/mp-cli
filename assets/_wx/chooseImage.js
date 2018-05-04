/**
 * @method: chooseImage - 选择图片
 * @param: {Number} count - 最多可以选择的图片张数，默认9
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (count = 9, options = {}) => {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      count,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}