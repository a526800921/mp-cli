/**
 * @method: uploadFile - 上传请求封装
 * @param: {Object} uploadData - 上传参数
 *                  {Boolean} unToken - 不使用token
 *                  ...other
 * @param: {Function} onProgressUpdate - 上传进度
 * @param: {Function} about - 终止上传
 * @return: Promise
  */

export default (store, { showToast, reLaunch }) => {

  const uploadFileReset = (uploadData, { onProgressUpdate, about } = {}) => {
    wx.showNavigationBarLoading()
    
    // 是否使用token
    const formData = uploadData.unToken === true ?
      uploadData.formData : { ...uploadData.formData, token: store.userInfo.token }

    // 请求主体
    return new Promise((resolve, reject) => {

      const uploadTask = wx.uploadFile({
        ...uploadData,
        name: `fileName_${Date.now() * Math.random()}`,
        formData,
        success(res) {
          // 请求成功
          const data = JSON.parse(res.data)
          const code = +data.code

          if (code === 0) {
            // 数据正确
            resolve(data)
          } else if (code === 311 || code === 310) {
            // token失效、重新登陆
            showToast('登陆失效，请重新登陆')
            setTimeout(() => reLaunch(store.loginPageRoute), 1500)

            return reject({ msg: '登陆失效或未登录！', err: res })
          } else {
            // 数据错误
            reject({ msg: '图片上传错误', url: uploadData.url, err: res })
          }
        },
        fail(err) { reject({ msg: '图片上传请求失败', url: uploadData.url, err }) },
        complete(res) { wx.hideNavigationBarLoading() }
      })

      typeof onProgressUpdate === 'function' && uploadTask.onProgressUpdate(onProgressUpdate)
      typeof about === 'function' && about(uploadTask.about.bind(uploadTask))
    })
  }

  return uploadFileReset
}