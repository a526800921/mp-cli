/**
 * @method: getImageInfo - 获取图片信息
 * @param: {String} src - 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (src = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.getImageInfo({
      src,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}