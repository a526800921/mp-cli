/**
 * @method: previewImage - 预览图片
 * @param: {Array} urls - 需要预览的图片链接列表
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (urls = [], options = {}) => {
  return new Promise((resolve, reject) => {
    wx.previewImage({
      urls,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}