/**
 * @method: getShareInfo - 获取转发详细信息
 * @param: {String} shareTicket - shareTicket ??? 
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (shareTicket = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.getShareInfo({
      shareTicket,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}