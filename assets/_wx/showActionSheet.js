// wx.showActionSheet 单纯的promise封装

export default function (itemList = []) {
  return new Promise((resolve, reject) => {
    wx.showActionSheet({
      itemList,
      itemColor: '#333333',
      success(res) { resolve(res) },
      fail(err) { reject(err) }
    })
  })
}