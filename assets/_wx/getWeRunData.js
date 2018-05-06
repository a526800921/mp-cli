/**
 * @method: getWeRunData - 获取用户过去三十天微信运动步数，需要先调用 wx.login 接口。
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.getWeRunData({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}