/**
 * @method: chooseInvoiceTitle - 选择用户的发票抬头
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.chooseInvoiceTitle({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}