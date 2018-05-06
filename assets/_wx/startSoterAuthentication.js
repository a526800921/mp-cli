/**
 * @method: startSoterAuthentication - 开始 SOTER 生物认证
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.makePhoneCall({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}