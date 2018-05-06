/**
 * @method: checkIsSupportSoterAuthentication - 获取本机支持的 SOTER 生物认证方式
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.checkIsSupportSoterAuthentication({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}