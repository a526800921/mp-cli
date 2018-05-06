/**
 * @method: hideLoading - 隐藏 loading 提示框
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options) => {
  return wx.hideLoading({ ...options })
}