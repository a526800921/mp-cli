// wx.openLocation 单纯的promise封装

export default function (config = {}) {
  return new Promise((resolve, reject) => {
    wx.openLocation({
      ...config,
      success(res) { resolve(res) },
      fail(err) { reject(err) }
    })
  })
}