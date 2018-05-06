/**
 * @method: getNetworkType - 获取网络类型
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.getNetworkType({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}