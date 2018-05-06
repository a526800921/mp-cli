/**
 * @method: removeSavedFile - 删除本地存储的文件
 * @param: {String} filePath - 需要删除的文件路径
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (filePath = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.removeSavedFile({
      filePath,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}