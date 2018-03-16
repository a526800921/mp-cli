export default {
  updateSystemInfo(store, systemInfo) {
    // 修改系统信息
    store.systemInfo = { ...systemInfo }

    return store
  }
}