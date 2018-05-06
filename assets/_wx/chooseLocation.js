/**
 * @method: chooseLocation - 打开地图选择位置
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.chooseLocation({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}