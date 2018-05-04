// wx.scanCode 单纯的promise封装

export default function (key, data) {
  return new Promise((resolve, reject) => {
    wx.scanCode({
      success(res) { resolve(res) },
      fail(err) { reject(err) },
    })
  })
}