// wx.showModal方法会阻碍setData渲染

export default function showModal(config = {}) {
  Promise.resolve().then(() => wx.showModal({
    ...config
  }))
}