/**
 * @method: getSystemInfo - 获取系统信息
 * @param: {Boolean} sync - 同步获取
 * @return: Promise
  */


export default ({ sync = false } = {}) => {
  return new Promise((resolve, reject) => {
    if (sync) return resolve(wx.getSystemInfoSync())

    wx.getSystemInfo({
      success: resolve,
      fail: reject,
    })
  })
}