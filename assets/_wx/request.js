/**
 * @method: request - 请求封装
 * @param: {Object} requestData - 请求配置参数
 *                  {Boolean} unToken - 不使用token
 *                  ...other
 * @return: Promise
  */

export default (store, { showToast, reLaunch, _console }) => {
  let count = 0 // 重复请求计数
  let loging = false // 登陆中

  const requestSuccess = (currentPage) => {
    // 请求成功要做的事情
    // 请求成功，刷新网络状态
    currentPage && currentPage.setData({ __offline: false })
    // 重置请求计数
    count = 0
  }

  const requestFail = (currentPage) => {
    // 请求失败要做的事情
    // 判定无网络__offline
    !store.online && currentPage && currentPage.setData({ __offline: true })
    count = 0 // 重置
  }

  // 请求主体
  const requestReset = (requestData = {}) => {
    // 获取当前页面实例，也就是说请求的时候必须有页面
    const currentPage = getCurrentPages().pop()
    // 开启页面loading
    wx.showNavigationBarLoading()
    // 返回Promise
    return new Promise((resolve, reject) => {
      // unToken 不使用token
      let data = requestData.unToken === true ?
        requestData.data || {} : { ...requestData.data, token: store.userInfo.token }

      // 请求主体
      wx.request({
        ...requestData,
        data,
        success(res) {
          // 请求成功
          requestSuccess(currentPage)

          const code = +res.data.code
          if (code === 0) {
            // 数据正确
            resolve(res.data)
          } else if (code === 311 || code === 310) {
            // token失效、重新登陆
            showToast('登陆失效，请重新登陆')
            setTimeout(() => reLaunch(store.loginPageRoute), 1500)

            return reject({ msg: '登陆失效或未登录！', err: res })
          } else {
            // 数据错误
            _console.error('请求出错，路径：', requestData.url)

            code === code && showToast(res.data.msg || '请求出错，请稍后再试')

            reject(res)
          }
        },
        fail(err) {
          if (++count < 3) return requestReset(requestData)
          // 请求失败3次
          count >= 3 && requestFail(currentPage)

          reject({ msg: '网络错误', err })
        },
        complete(res) {
          // 关闭页面loading
          wx.hideNavigationBarLoading()
        }
      })
    })
  }

  return requestReset
}