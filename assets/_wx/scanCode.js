/**
 * @method: scanCode - 调起客户端扫码界面，扫码成功后返回对应的结果
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.scanCode({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}