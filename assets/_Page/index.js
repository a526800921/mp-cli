/**
 * 封装的page
 * 配置参数见相应js文件
 * 
 * 无网络状态：在页面引入组件 <offline-c offline="{{__offline}}" /> 且值固定为 __offline
 * 
 */

export default store => {

  return (pageData = {}, {
    // 多角色控制相关
    moreRole = false,
    moreRoleConfig = {},
    // 页面上拉加载下拉刷新相关
    usePageLoad = false,
    loadDataListAmount = 1,
    } = {}) => {
    let updatePageData = pageData

    if (moreRole) {
      // 开启多角色控制
      const moreRoleModule = require('./moreRole.js')

      updatePageData = moreRoleModule(store, updatePageData, moreRoleConfig)
    }

    if (usePageLoad) {
      // 开启页面上拉加载
      const pageLoadModule = require('./pageLoad.js')

      updatePageData = pageLoadModule(store, updatePageData, loadDataListAmount)
    }

    // 注入额外data数据
    Object.assign(updatePageData.data, {
      __offline: false, // 网络是否异常
    })

    return Page({
      ...updatePageData,

      onShow(...value) {
        setTimeout(store.updatePalmRejection.bind(null, true), 500)

        typeof updatePageData.onShow === 'function' && updatePageData.onShow.call(this, ...value)
      },
    })
  }
}