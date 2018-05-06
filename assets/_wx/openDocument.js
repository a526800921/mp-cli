/**
 * @method: openDocument - 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx
 * @param: {String} filePath - 文件路径，可通过 downFile 获得
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (filePath = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.openDocument({
      filePath,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}