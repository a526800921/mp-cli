/**
 * @method: saveFile - 保存文件到本地。注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用
 * @param: {String} tempFilePath - 需要保存的文件的临时路径
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (tempFilePath = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.saveFile({
      tempFilePath,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}