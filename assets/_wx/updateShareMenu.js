/**
 * @method: updateShareMenu - 更新转发属性
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.updateShareMenu({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}