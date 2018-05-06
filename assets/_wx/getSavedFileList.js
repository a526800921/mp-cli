/**
 * @method: getSavedFileList - 获取本地已保存的文件列表
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.getSavedFileList({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}