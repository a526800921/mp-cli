// uploadFileList 上传请求封装 - 上传图片列表

export default function (wxApiuploadFile) {

  return function (filePathList, url, callback, about) {
    // callback - 上传进度执行的函数，ps：高阶函数，传入index，返回使用的function
    // callback - 例：
    /* function onProgressUpdate(index) {
      // 多图上传，用于加载进度显示，index是图片列表下标
      return (res) => {
        console.log('上传进度', res.progress)
        this.setData({...})
      }
    } */

    wx.showNavigationBarLoading()

    return new Promise((resolve, reject) => {
      function isLast() {
        return success + fail >= count
      }

      let count = filePathList.length, // 列表长度
        success = 0, // 成功计数
        fail = 0, // 失败计数
        pathList = [] // 最后的路径数组

      function uoload(item) {
        let sum = success + fail

        wxApiuploadFile(item, url, callback(sum), about)
          .then(res => {
            success++
            pathList[sum] = res
            if (isLast()) return resolve(pathList)

            setTimeout(() => uoload(filePathList[sum + 1]), 300)
          })
          .catch(err => {
            fail++
            if (isLast()) return resolve(pathList)

            setTimeout(() => uoload(filePathList[sum + 1]), 300)
          })
      }

      uoload(filePathList[0])



      // 暂弃
      // filePathList.forEach((item, index) => {
      //   wxApiuploadFile(item, url)
      //     .then(res => {
      //       success++
      //       pathList[index] = res

      //       isLast() && resolve(pathList)
      //     })
      //     .catch(err => {
      //       fail++

      //       isLast() && resolve(pathList)
      //     })
      // })
    })
  }
}