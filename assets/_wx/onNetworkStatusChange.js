/**
 * @method: onNetworkStatusChange - 监听网络状态变化
 * @param: {Function} callback - 监听函数
 * @return: Function
  */

export default callback => {
  return wx.onNetworkStatusChange(callback)
}