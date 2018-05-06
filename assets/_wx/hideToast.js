/**
 * @method: hideToast - 隐藏消息提示框
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options) => {
  return wx.hideToast({ ...options })
}