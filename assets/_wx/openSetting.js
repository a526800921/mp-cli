// wx.openSetting 单纯的promise封装

export default function () {
  return new Promise(resolve => {
    wx.openSetting({
      success(res) {
        // 获取权限设置
        resolve(res.authSetting)
      }
    })
  })
}