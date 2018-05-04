/**
 * @method: getSetting - 获取权限设置
 * @return: Promise
  */

export default () => {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: resolve,
      fail: reject,
    })
  })
}