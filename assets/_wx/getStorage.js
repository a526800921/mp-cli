/**
 * @method: getStorage - 获取缓存数据
 * @param: {String} key - 本地缓存中的指定的 key
 * @param: {Boolean} sync - 同步获取
 * @return: Promise
  */

export default (key, { sync = false } = {}) => {
  return new Promise((resolve, reject) => {
    if (sync) return resolve(wx.getStorageSync(key))

    wx.getStorage({
      key,
      success: resolve,
      fail: reject,
    })
  })
}