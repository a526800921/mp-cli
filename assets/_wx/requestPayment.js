// wx.requestPayment 单纯的promise封装
// 弃用，支付不支持promise

export default function (config) {
  return new Promise((resolve, reject) => {
    wx.requestPayment({
      ...config,
      complete(res) {
        // 支付调用结果
        if (res.errMsg === 'requestPayment:ok') {
          // 支付成功
          resolve(res)
        } else {
          // 支付失败或取消支付
          reject(res)
        }

        typeof config.complete === 'function' && config.complete()
      },
    })
  })
}