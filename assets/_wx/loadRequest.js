/**
 * @method: loadRequest - 上拉加载请求封装
 * @param: {Object} requestData - 请求参数
 * @param: {Object} option - 其他配置
 *    {Function} loadCallBack - 上拉加载组件回调函数
 *    {String} listFiled - 字段配置，嵌套层级，多层级可设置为 list.list2.list3
 *    {Number} initPage - 第一页（有的第一页是0，有的是1）
 *    {Boolean} reset - 是否重置请求，回到第一页
 * 
 *    {String} requestPage - 请求分页字段 (直接修改默认值即可)
 *    {String} requestPageSize - 分页大小字段 (直接修改默认值即可)
 * 
 *    上拉加载：
 *    {Boolean} usePageLoad -  是否是page上拉加载
 *    {Number} pageLoadTabIndex -  多列加载，请求列下标
 * 
 * @return Promise请求数据
 */

export default _wxRequest => {

  return (requestData = {},
    {
      loadCallBack,
      listFiled = 'list',
      initPage = 0,
      reset = false,
      requestPage = 'page',
      requestPageSize = 'pageSize',
      // 页面上拉加载
      usePageLoad = false,
      pageLoadTabIndex = 0
    } = {}) => {
    // 获取当前页面栈实例
    const currentPage = getCurrentPages().pop()
    // 设置当前页的隐式分页
    let queryPage = currentPage.data[`${requestData.url}__page__`]

    // 刷新分页页数
    queryPage = currentPage.data[`${requestData.url}__page__`] =
      queryPage !== void 0 ?
        reset ?
          initPage : queryPage + 1
        : initPage

    // scroll组件重置列表时刷新约定的 __scrollReset 值 重置loadmore状态
    // !usePageLoad && reset && currentPage.setData({ __scrollReset: Math.random() })

    // 初始化分页数据
    !requestData.data && (requestData.data = {})
    !requestData.data[requestPageSize] && (requestData.data[requestPageSize] = 10)
    requestData.data[requestPage] = queryPage

    // 返回请求
    return _wxRequest({
      ...requestData
    }).then(res => {
      const dataList = listFiled.match(/[^\[\]\.]+/g).reduce((item1, item2) => item1[item2], res)
      const loadFLag = dataList.length < requestData.data[requestPageSize] // true -> 没有下一页

      // 分页首页且有下一页
      if (queryPage === initPage && !loadFLag) {
        // usePageLoad，非scroll组件，改变loadmore状态
        usePageLoad && currentPage.setData({ [`__loadList[${pageLoadTabIndex}].showLoad`]: true })
        // scroll组件已在组件内部处理，这里不需要处理
      }

      // 上拉加载的load
      typeof loadCallBack === 'function' && loadCallBack(loadFLag)

      // 下拉刷新关闭动画
      usePageLoad && reset && setTimeout(wx.stopPullDownRefresh.bind(wx), 200)

      return res
    })
  }
}