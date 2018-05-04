// wx.showToast单纯的封装

export default function showToast(config = {}) {
  Promise.resolve().then(() => wx.showToast({
    icon: 'none',
    ...config
  }))
}