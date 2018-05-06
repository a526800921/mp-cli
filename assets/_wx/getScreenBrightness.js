/**
 * @method: getScreenBrightness - 获取屏幕亮度
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.getScreenBrightness({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}