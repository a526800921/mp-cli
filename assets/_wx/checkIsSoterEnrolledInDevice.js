/**
 * @method: checkIsSoterEnrolledInDevice - 获取设备内是否录入如指纹等生物信息的接口
 * @param: {String} checkAuthMode - 认证方式
 * @param: {Object} options - 其他选项
 * @return: Promise
  */

export default (checkAuthMode = 'fingerPrint', options = {}) => {
  return new Promise((resolve, reject) => {
    wx.checkIsSoterEnrolledInDevice({
      checkAuthMode,
      ...options,
      success: resolve,
      fail: reject,
    })
  })
}