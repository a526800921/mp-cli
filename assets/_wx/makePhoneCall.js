/**
 * @method: makePhoneCall - 拨打电话
 * @param: {String} phoneNumber - 电话号码
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (phoneNumber = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.makePhoneCall({
      phoneNumber,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}