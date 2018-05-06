/**
 * @method: openSetting - 调起客户端小程序设置界面，返回用户设置的操作结果
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.openSetting({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}