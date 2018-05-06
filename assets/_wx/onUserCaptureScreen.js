/**
 * @method: onUserCaptureScreen - 监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件
 * @param: {Function} callback - 回调函数
 * @return: Function
  */

export default (callback) => {
  return wx.onUserCaptureScreen(callback)
}