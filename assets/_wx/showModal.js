/**
 * @method: showModal - ​显示模态弹窗
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.showModal({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}