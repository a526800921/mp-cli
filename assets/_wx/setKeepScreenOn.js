/**
 * @method: setKeepScreenOn - 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效
 * @param: {Boolean} keepScreenOn - 是否保持屏幕常亮
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (keepScreenOn = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.setKeepScreenOn({
      keepScreenOn,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}