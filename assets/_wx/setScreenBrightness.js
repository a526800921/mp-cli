/**
 * @method: setScreenBrightness - 设置屏幕亮度
 * @param: {Number} value - 屏幕亮度值，范围 0~1，0 最暗，1 最亮
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (value = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.setScreenBrightness({
      value,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}