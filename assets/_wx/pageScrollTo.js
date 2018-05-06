/**
 * @method: pageScrollTo - 将页面滚动到目标位置
 * @param: {Number} scrollTop - 滚动到页面的目标位置（单位px）
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (scrollTop = 0, options = {}) => {
  return wx.pageScrollTo({
    scrollTop,
    ...options,
  })
}