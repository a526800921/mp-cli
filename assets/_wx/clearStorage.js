/**
 * @method: clearStorage - 移除所有缓存数据
 * @param: {Boolean} sync - 同步移除
  */

export default ({ sync = false } = {}) => {
  return new Promise(resolve => {
    if (sync) return resolve(wx.clearStorageSync())

    resolve(wx.clearStorage())
  })
}