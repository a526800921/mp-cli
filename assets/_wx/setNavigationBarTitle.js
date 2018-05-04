// wx.setNavigationBarTitle 单纯的promise封装

export default function (title) {
  return new Promise(resolve => {
    wx.setNavigationBarTitle({
      title,
      success(res) {
        resolve(res)
      },
    })
  })
}