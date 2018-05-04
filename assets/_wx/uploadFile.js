// wx.uploadFile 上传请求封装

export default function (store, api) {
  const { userInfoPort } = api

  return function uploadFileReset(filePath, url, callback, about) {
    wx.showNavigationBarLoading()

    return new Promise((resolve, reject) => {

      const uploadTask = wx.uploadFile({
        url: url || `${userInfoPort}/imgupload`,
        filePath,
        name: `${store.userInfo.createTime}-${Date.now() * Math.random()}`,
        formData: {
          token: store.userInfo.token
        },
        success(res) {
          // 请求成功
          let data = JSON.parse(res.data)
          let code = +data.code

          if (code === 0) {
            // 数据正确
            resolve(data)
          } else if (code === 311 || code === 310) {
            // token失效、重新登陆
            const { getUserAllInfo, login } = getApp().globalData.utils

            resolve(
              login(getUserAllInfo())
                .then(res2 => {
                  // 登陆成功
                  return uploadFileReset(filePath, url, callback, about)
                })
            )
          } else {
            // 数据错误
            console.error('图片上传错误')
            reject(res)
          }
        },
        fail(err) { reject(err) },
        complete(res) { wx.hideNavigationBarLoading() }
      })

      typeof callback === 'function' && uploadTask.onProgressUpdate(callback)
      typeof about === 'function' && about(uploadTask.about.bind(uploadTask))
    })
  }
}