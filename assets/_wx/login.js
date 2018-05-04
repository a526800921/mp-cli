/**
 * @method: login - 获取临时登录凭证
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (options = {}) => {
  return new Promise(resolve => wx.login({ ...options, success: resolve }))
}