/**
 * @method: getUserInfo - 获取用户信息
 * @param: {Object} options - 其他选项
 *                  {String} loginCode - 调用 login 返回的 code
 * @return: Promise
  */

export default function (options = {}) {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      withCredentials: true,
      ...options,
      success(res) {
        resolve({ ...res, loginCode: options.loginCode })
      },
      fail: reject,
    })
  })
}