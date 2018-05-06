/**
 * @method: uploadFileList - 列表上传请求封装（数组，逐个上传，统一返回）
 * @param: {Object} uploadData - 上传参数
 *                  {String} filePath - 列表数组
 *                  {Boolean} unToken - 不使用token
 *                  ...other
 * @param: {Function} onProgressUpdate - 上传进度
 *                    @param: {Number} sum - 当前上传的下标
 * @param: {Function} about - 终止上传
 * @return: Promise
  */

export default uploadFile => {

  // 请求主体
  return (uploadData, { onProgressUpdate, about } = {}) => {

    return new Promise((resolve, reject) => {
      const count = uploadData.filePath.length // 列表长度
      let success = 0 // 成功计数
      let fail = 0 // 失败计数
      let pathList = [] // 最后的路径数组

      const isLast = () => {
        // 是否为最后一次
        return success + fail >= count
      }

      const uoload = item => {
        const sum = success + fail // 合计

        uploadFile(item, { onProgressUpdate: onProgressUpdate(sum), about })
          .then(res => {
            success++
            pathList[sum] = res
            if (isLast()) return resolve(pathList)

            setTimeout(() => uoload(uploadData.filePath[sum + 1]), 300)
          })
          .catch(err => {
            fail++
            if (isLast()) return resolve(pathList)

            setTimeout(() => uoload(uploadData.filePath[sum + 1]), 300)
          })
      }

      uoload(uploadData.filePath[0])
    })
  }
}