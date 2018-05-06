import _console from '../../assets/_console/index.js'

export default {
  updateConsoleControl(store, consoleControl = false, _console_control) {
    // 控制console是否展示
    Object.assign(_console_control || getApp().globalData.control._console, consoleControl ? console : _console)

    return store
  },
  updateSystemInfo(store, systemInfo) {
    // 修改系统信息
    store.systemInfo = systemInfo

    return store
  },
  updateOnline(store, online) {
    // 修改网络状态
    store.online = online

    return store
  },
  updatePalmRejection(store, open = true) {
    // 防止连续点击路由跳转不及时的报错
    store.palmRejection = open

    return store
  },
}