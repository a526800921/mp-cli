/**
 * @method: chooseAddress - 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    wx.chooseAddress({
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}