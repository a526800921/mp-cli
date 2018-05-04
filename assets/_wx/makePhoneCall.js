// wx.makePhoneCall 单纯的promise封装

export default function (phoneNumber) {
  return new Promise((resolve, reject) => {
    wx.makePhoneCall({
      phoneNumber,
      success(res) { resolve(res) },
      fail(err) { reject(err) },
    })
  })
}