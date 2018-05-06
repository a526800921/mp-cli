/**
 * @method: hideNavigationBarLoading - 隐藏导航条加载动画
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return wx.hideNavigationBarLoading({ ...options })
}