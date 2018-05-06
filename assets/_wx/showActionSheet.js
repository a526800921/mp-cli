/**
 * @method: showActionSheet - ​显示操作菜单
 * @param: {Array} itemList - 按钮的文字数组，数组长度最大为6个
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (itemList = [], options = {}) => {
  return new Promise((resolve, reject) => {
    wx.showActionSheet({
      itemList,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}