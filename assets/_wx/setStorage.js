// wx.setStorage 单纯的promise封装

export default function (key, data) {
  return new Promise(resolve => {
    wx.setStorage({
      key,
      data,
      success: resolve,
    })
  })
}