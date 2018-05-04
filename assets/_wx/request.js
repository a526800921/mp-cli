// wx.request 使用promise封装请求

export default function (store) {
  let count = 0, // 重复请求计数
    loging = false // 登陆中

  return function requestReset(config = {}) {
    const currentPage = getCurrentPages().pop()

    wx.showNavigationBarLoading()

    return new Promise((resolve, reject) => {
      // 不使用token
      let data = config.useToken === false ?
        config.data || {} :
        Object.assign({}, config.data, { token: store.userInfo.token })

      wx.request({
        ...config,
        data,
        success(res) {
          // 请求成功，刷新网络状态
          currentPage && currentPage.data.__offline && currentPage.setData({ __offline: false })
          // 重置请求计数
          count = 0

          // 请求成功
          let code = +res.data.code

          if (code === 0) {
            // 数据正确
            resolve(res.data)
          } else if (code === 311 || code === 310) {
            if (loging) {
              // 正在登陆，防止重复登陆
              return resolve(
                new Promise(resolve2 => {
                  let timer = setInterval(() => {
                    if (!loging) {
                      clearInterval(timer)
                      resolve2(requestReset(config))
                    }
                  }, 200)
                })
              )
            }
            loging = true
            
            // token失效、重新登陆
            const { getUserAllInfo, login } = getApp().globalData.utils

            resolve(
              login(getUserAllInfo())
                .then(res2 => {
                  // 登陆成功
                  loging = false
                  return requestReset(config)
                })
            )
          } else {
            // 请求出错
            console.error('请求出错，路径：', config.url)

            code === code && wx.showToast({
              title: res.data.msg || '请求出错，请稍后再试',
              icon: 'none',
              duration: 2000
            })

            reject(res)
          }
        },
        fail(err) {
          if (++count < 3) return requestReset(config)
          if (count >= 3) {
            // 请求失败3次
            count = 0 // 重置

            // 判定无网络__offline
            !store.connected && currentPage && currentPage.setData({ __offline: true })
          }

          reject(err)
        },
        complete(res) {
          wx.hideNavigationBarLoading()
        }
      })
    })
  }
}