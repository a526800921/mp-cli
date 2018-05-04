/**
 * @method: getUserInfo - 获取用户信息
 * @param: {Boolean} withCredentials - 是否带上登录态信息，为 true 时需要先调用 wx.login 接口
 * @param: {String} loginCode - 调用 login 返回的 code
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default function (withCredentials = true, { loginCode = '', options = {} } = {}) {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      withCredentials,
      ...options,
      success(res) {
        resolve({ ...res, loginCode })
      },
      fail: reject,
    })
  })
}