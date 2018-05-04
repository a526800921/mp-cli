// loadRequest 上拉加载封装
export default _wxRequest => {
  /**
   * 上拉加载请求封装
   * @Param: {Object} options - 请求参数
   * @Param: {Object}
   *    {Function} load - 上拉加载组件回调函数
   *    {String} list - 字段配置，嵌套层级
   *    {Number} initPage - 第一页（有的第一页是0，有的是1）
   *    {Boolean} reset -  是否重置
   * 
   *    上拉加载：
   *    {Boolean} usePageLoad -  是否是page上拉加载
   *    {Number} pageLoadCount -  多列加载，请求列下标
   */
  return (options = {},
    {
      load,
      list = 'list',
      initPage = 1,
      reset = false,
      // 页面上拉加载
      usePageLoad = false,
      pageLoadCount = 0
    } = {}) => {
    // 获取当前页面栈实例
    const currentPage = getCurrentPages().pop()
    // 设置当前页的隐式分页
    let page = currentPage.data[`${options.url}_page_`]

    // 刷新分页页数
    page = currentPage.data[`${options.url}_page_`] =
      page !== void 0 ?
        reset ?
          initPage : page + 1
        : initPage

    // scroll组件重置列表时刷新约定的 __scrollReset 值 重置loadmore状态
    !usePageLoad && reset && currentPage.setData({ __scrollReset: Math.random() })

    // ================================================================================待完成

    if (!options.data) options.data = {}
    if (!options.data.pageSize) options.data.pageSize = 10
    options.data.page = page

    // 返回promise
    return _wxRequest({
      ...options
    }).then(res => {
      let dataList = res[list].length !== void 0 ? res[list] : res[list][list2],
        loadFLag = dataList.length < options.data.pageSize // true -> 没有下一页

      // 分页首页且有下一页
      if (page === initPage && !loadFLag) {
        // usePageLoad，非scroll组件，改变loadmore状态
        if (usePageLoad) {
          currentPage.setData({ [`__loadList[${pageLoadCount}].showLoad`]: true })
        }
        // scroll组件已在组件内部处理，这里不需要处理
      }

      // 上拉加载的load
      typeof load === 'function' && load(loadFLag)

      // 下拉刷新关闭动画
      usePageLoad && reset && setTimeout(wx.stopPullDownRefresh.bind(wx), 200)

      /* // 数据代处理第二版本
      if (useLevel_2) {
        return (listName = '', callback = res => { }) => {
          callback(dataList)
          let listNameArr = listName.replace(/[\.\[\]]/g, '.').split('.').filter(item => item)

          let oldList = reset ? [] :
            listNameArr.reduce((item, item2) => item[item2], currentPage.data),
            newList = oldList.concat(dataList)

          if (!newList.length) {
            // 没有数据
            if (usePageLoad) {
              // 开启了页面的上拉加载
              currentPage.setData({ [`__loadList[${pageLoadCount}].noData`]: true })
            } else {
              // scroll组件自行处理
            }
          }
          // console.log(currentPage)
          currentPage.setData({ [listName]: newList })

          return res
        }
      } */

      return res
    })
  }
}