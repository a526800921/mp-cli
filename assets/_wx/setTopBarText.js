/**
 * @method: setTopBarText - 动态设置置顶栏文字内容，只有当前小程序被置顶时能生效，如果当前小程序没有被置顶，也能调用成功，但是不会立即生效，只有在用户将这个小程序置顶后才换上设置的文字内容。注意：调用成功后，需间隔 5s 才能再次调用此接口，如果在 5s 内再次调用此接口，会回调 fail，errMsg："setTopBarText: fail invoke too frequently"
 * @param: {String} text - 置顶栏文字内容
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (text = '', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.setTopBarText({
      text,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}