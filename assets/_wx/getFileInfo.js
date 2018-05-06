/**
 * @method: getFileInfo - 获取文件信息
 * @param: {String} filePath - 本地文件路径
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (filePath = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.getFileInfo({
      filePath,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}