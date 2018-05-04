// 使用pageLoad载入的模块
/**
 * 配置参数：
 * usePageLoad ： 开启页面的上拉加载，
 *    引入相应的 PageLoadmore 组件（单列多列相同）
 *    传入值固定，index为当前列下标，单列可不传index
 *    <page-loadmore load="{{__loadList}}" index="{{__tabIndex}}" /> 
 *
 *    ----------------------------------------------------------------------------------------------------
 *
 *    并使用相应的 _wx.loadRequest 请求方法，
 *    在第三个参数 - 配置参数中添加:
 *       usePageLoad: true - 开启页面上拉加载
 *       pageLoadCount: {Number} - 该值为多列请求的下标（多列请求时传入）
 *
 *    ----------------------------------------------------------------------------------------------------
 *
 *    使用上拉加载时，在全局约定一个函数 __getDataLoad(load, index) 用以执行上拉加载后续(如loadmore状态改变)，并传入两个参数
 *        {Function} 接收一个来自 _wx.loadRequest 的是否还有数据的参数，将该函数传入 _wx.loadRequest 的 load 参数中即可
 *        {Number} 若为单列表，该参数为0，若为多列表，该参数是当前列表页的下标（多列请求数据时可以使用）
 *
 *    使用下拉刷新时，给原生命周期函数 onPullDownRefresh(index) 传入一个参数
 *        {Number} 若为单列表，该参数为0，若为多列表，该参数是当前列表页的下标（多列请求数据时可以使用）
 *
 * loadDataListAmount : 上拉加载列表数量，一个页面可能会有多个列表，需要开启 usePageLoad
  */

const pageLoadReachBottom = (_this, tabBarTopIndex = 0) => {
  // 上拉加载
  let loadConfig = _this.data.__loadList[tabBarTopIndex]

  if (!loadConfig.isLoading && loadConfig.hasData && loadConfig.showLoad) {
    // 没有在加载中 且 还有数据 且 已展示出loadmore 则加载数据
    loadConfig.isLoading = true

    // 当前实例约定的上拉加载函数，传入 加载完成函数 及 多列加载的当前下标（单列的下标默认为0）
    typeof _this.__getDataLoad === 'function' && _this.__getDataLoad((isLast) => {
      // 加载完成的函数
      loadConfig.isLoading = false

      // {Boolean} isLast 是否是最后一项
      isLast && _this.setData({
        [`__loadList[${tabBarTopIndex}]`]: Object.assign(loadConfig, {
          loadmore: 1,
          hasData: false,
        }),
      })
    }, tabBarTopIndex)
  }
}

module.exports = (store, pageData, loadDataListAmount) => {
  let data = pageData.data,
    loadConfig = {
      showLoad: false, // 是否展示loadmore
      isLoading: false, // 是否在加载中
      hasData: true, // 是否还有数据
      loadmore: 2, // 加载状态
      noData: false, // 没有数据
    }

  // 开启上拉加载后向页面添加 __loadList 配置数据
  data.__loadList = new Array(loadDataListAmount).fill({ ...loadConfig })
  // 多列加载时当前列的下标
  data.__tabIndex = 0

  let lastPageData = {
    ...pageData,
    data,

    // 页面下拉刷新事件的处理函数
    onPullDownRefresh(...e) {
      const index = typeof e[0] === 'number' ? e[0] : this.data.__tabIndex

      this.setData({ [`__loadList[${index}]`]: { ...loadConfig } })

      // 执行下面刷新处理函数并传入当前tabBarTop的index，若为单列数据，则传入0
      typeof pageData.onPullDownRefresh === 'function' && pageData.onPullDownRefresh.call(this, ...e)
    },

    // 页面上拉触底事件的处理函数
    onReachBottom(...e) {
      const index = this.data.__tabIndex

      pageLoadReachBottom(this, index)

      typeof pageData.onReachBottom === 'function' && pageData.onReachBottom.call(this, ...e)
    }
  }

  return lastPageData
}