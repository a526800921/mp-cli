/**
 * @method: getSavedFileInfo - 获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo 接口。
 * @param: {String} filePath - 文件路径
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (filePath = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.getSavedFileInfo({
      filePath,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}