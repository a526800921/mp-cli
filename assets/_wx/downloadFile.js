/**
 * @method: downloadFile - 下载文件
 * @param: {String} url - 下载路径
 * @param: {Object} options - 其他选项
 * @param: {Function} onProgressUpdate - 下载进度
 * @param: {Function} about - 终止下载
 * @return: Promise
  */

export default (url, options = {}, { onProgressUpdate, abort } = {}) => {
  return new Promise((resolve, reject) => {
    const downloadTask = wx.downloadFile({
      url,
      ...options,
      success: resolve,
      fail: reject,
    })

    typeof onProgressUpdate === 'function' && downloadTask.onProgressUpdate(onProgressUpdate)
    typeof about === 'function' && about(downloadTask.about.bind(downloadTask))
  })
}