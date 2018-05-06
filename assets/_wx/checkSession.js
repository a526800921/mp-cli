/**
 * @method: checkSession - 校验用户当前session_key是否有效
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.checkSession({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}