/**
 * @method: getSetting - 获取用户的当前设置
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}