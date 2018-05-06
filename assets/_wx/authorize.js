/**
 * @method: authorize - 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。
 * @param: {String} scope - 需要获取权限的scope，详见 scope 列表
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (scope = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.authorize({
      scope,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}