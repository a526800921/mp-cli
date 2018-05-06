/**
 * @method: navigateToMiniProgram - 打开同一公众号下关联的另一个小程序。（注：必须是同一公众号下，而非同个 open 账号下）
 * @param: {String} appId - 要打开的小程序 appId
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (appId = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.navigateToMiniProgram({
      appId,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}