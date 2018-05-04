// wx.openDocument 在页面没跳转之前多次调用会报错

export default function (filePath) {
  return new Promise((resolve, reject) => {
    wx.openDocument({
      filePath,
      success(res) { resolve(res) },
      fail(err) { reject(err) },
    })
  })
}