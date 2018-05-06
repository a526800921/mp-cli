/**
 * @method: getStorageInfo - 获取所有缓存数据
 * @param: {Boolean} sync - 同步获取
 * @return: Promise
  */

export default ({ sync = false } = {}) => {
  return new Promise(resolve => {
    if (sync) return resolve(wx.getStorageInfoSync())

    wx.getStorageInfo({
      success: resolve,
    })
  })
}