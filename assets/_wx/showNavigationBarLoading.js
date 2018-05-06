/**
 * @method: showNavigationBarLoading - 在当前页面显示导航条加载动画
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return wx.showNavigationBarLoading({ ...options })
}