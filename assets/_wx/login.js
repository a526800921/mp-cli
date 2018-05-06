/**
 * @method: login - 调用接口wx.login() 获取临时登录凭证（code）
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.login({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}