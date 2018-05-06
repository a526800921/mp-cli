/**
 * @method: saveImageToPhotosAlbum - 保存图片到系统相册
 * @param: {String} filePath - 图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (filePath = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.saveImageToPhotosAlbum({
      filePath,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}