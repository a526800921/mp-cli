/**
 * @method: removeStorage - 移除缓存数据
 * @param: {String} key - 本地缓存中的指定的 key
 * @param: {Boolean} sync - 同步移除
  */

export default (key, { sync = false } = {}) => {
  return new Promise((resolve, reject) => {
    if (sync) return resolve(wx.removeStorageSync(key))

    wx.removeStorage({
      key,
      success: resolve,
      fail: reject,
    })
  })
}