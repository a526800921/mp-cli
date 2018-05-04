// 使用moreRole载入的模块
/**
 * moreRole : 开启多角色控制，列如一个页面分为客户端和采购端逻辑
 * moreRoleConfig : 多角色控制的配置参数
 *    ifrom - 文件名，也是onLoad的query参数，用来判断加载哪一个文件，取值options[ifrom]
 *    Logic - 文件名，与ifrom一起使用，`${ifrom}${Logic}`
 *            例如： adminLogic.js   clientLogic.js
  */

// 生命周期列表
const cycle = ['onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap']

const cycleMap = (logic, _this) => {
  // 生命周期工厂函数，添加需要使用的生命周期
  cycle.forEach(item => {
    if (typeof logic[item] === 'function') {
      const oldCycle = typeof _this[item] === 'function' && _this[item]

      _this[item] = (...e) => {
        oldCycle && oldCycle.call(_this, ...e)
        logic[item].call(_this, ...e)
      }
    }
  })
}

module.exports = (store, pageData, { ifrom = 'ifrom', Logic = 'Logic' } = {}) => {

  let lastPageData = {
    ...pageData,
    __logic: {},

    onLoad(...param) {
      // 获取载入角色逻辑
      const laseRoute = this.route.substring(0, this.route.lastIndexOf('/'))
      const __logic = this.__logic = require(`../../${laseRoute}/${param[0][ifrom]}${Logic}.js`)

      // 生命周期注入函数
      cycleMap(__logic, this)

      // 设置载入角色数据
      this.setData({
        ...__logic.data,
        ...param[0]
      })

      // 设置载入角色的方法
      Object.assign(this, __logic.methods)

      typeof pageData.onLoad === 'function' && pageData.onLoad.call(this, ...param)
      typeof __logic.onLoad === 'function' && __logic.onLoad.call(this, ...param)
    },
  }

  return lastPageData
}