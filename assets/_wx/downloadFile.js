/**
 * @method: downloadFile - 下载文件
 * @param: {String} url - 下载路径
 * @param: {Object} options - 其他选项
 * @return: Promise
 * @ather: 原方法返回一个uploadTask对象，该方法不返回
  */

export default (url, options = {}) => {
  return new Promise((resolve, reject) => {
    wx.downloadFile({
      url,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}