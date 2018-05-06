/**
 * @method: stopPullDownRefresh - 停止当前页面下拉刷新
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return wx.stopPullDownRefresh({ ...options })
}