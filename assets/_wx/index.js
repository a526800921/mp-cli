/**
 * @readme: 重新封装常用微信API，基本返回Promise
  */

// 网络 ================================================================
// 请求
import request from './request.js'
import loadRequest from './loadRequest.js'
// 上传下载
import uploadFile from './uploadFile.js'
import uploadFileList from './uploadFileList.js'
import downloadFile from './downloadFile.js'

// 媒体 ================================================================
// 图片
import chooseImage from './chooseImage.js'
import previewImage from './previewImage.js'
import getImageInfo from './getImageInfo.js'
import saveImageToPhotosAlbum from './saveImageToPhotosAlbum.js'

// 文件 ================================================================
import saveFile from './saveFile.js'
import getFileInfo from './getFileInfo.js'
import getSavedFileList from './getSavedFileList.js'
import getSavedFileInfo from './getSavedFileInfo.js'
import removeSavedFile from './removeSavedFile.js'
import openDocument from './openDocument.js'

// 数据缓存 ================================================================
import getStorage from './getStorage.js'
import getStorageInfo from './getStorageInfo.js'
import removeStorage from './removeStorage.js'
import clearStorage from './clearStorage.js'
import setStorage from './setStorage.js'

// 位置 ================================================================
// 获取位置
import getLocation from './getLocation.js'
import chooseLocation from './chooseLocation.js'
// 查看位置
import openLocation from './openLocation.js'

// 设备 ================================================================
// 系统信息
import getSystemInfo from './getSystemInfo.js'
// 网络状态
import getNetworkType from './getNetworkType.js'
import onNetworkStatusChange from './onNetworkStatusChange.js'
// 拨打电话
import makePhoneCall from './makePhoneCall.js'
// 扫码
import scanCode from './scanCode.js'
// 剪贴板
import setClipboardData from './setClipboardData.js'
import getClipboardData from './getClipboardData.js'
// 屏幕亮度
import setScreenBrightness from './setScreenBrightness.js'
import getScreenBrightness from './getScreenBrightness.js'
import setKeepScreenOn from './setKeepScreenOn.js'
// 用户截屏事件
import onUserCaptureScreen from './onUserCaptureScreen.js'
// 手机联系人
import addPhoneContact from './addPhoneContact.js'

// 界面 ================================================================
// 界面交互
import showToast from './showToast.js'
import hideToast from './hideToast.js'
import showLoading from './showLoading.js'
import hideLoading from './hideLoading.js'
import showModal from './showModal.js'
import showActionSheet from './showActionSheet.js'
// 设置导航条
import setNavigationBarTitle from './setNavigationBarTitle.js'
import showNavigationBarLoading from './showNavigationBarLoading.js'
import hideNavigationBarLoading from './hideNavigationBarLoading.js'
import setNavigationBarColor from './setNavigationBarColor.js'
// 设置tabBar
import setTabBarBadge from './setTabBarBadge.js'
import removeTabBarBadge from './removeTabBarBadge.js'
import showTabBarRedDot from './showTabBarRedDot.js'
import hideTabBarRedDot from './hideTabBarRedDot.js'
import setTabBarStyle from './setTabBarStyle.js'
import setTabBarItem from './setTabBarItem.js'
import showTabBar from './showTabBar.js'
import hideTabBar from './hideTabBar.js'
// 设置置顶信息
import setTopBarText from './setTopBarText.js'
// 导航
import navigateTo from './navigateTo.js'
import redirectTo from './redirectTo.js'
import switchTab from './switchTab.js'
import navigateBack from './navigateBack.js'
import reLaunch from './reLaunch.js'
// 位置
import pageScrollTo from './pageScrollTo.js'
// 下拉刷新
import startPullDownRefresh from './startPullDownRefresh.js'
import stopPullDownRefresh from './stopPullDownRefresh.js'

// 开放接口 ================================================================
// 登陆
import login from './login.js'
import checkSession from './checkSession.js'
// 授权
import authorize from './authorize.js'
// 用户信息
import getUserInfo from './getUserInfo.js'
// 转发
import showShareMenu from './showShareMenu.js'
import hideShareMenu from './hideShareMenu.js'
import updateShareMenu from './updateShareMenu.js'
import getShareInfo from './getShareInfo.js'
// 收货地址
import chooseAddress from './chooseAddress.js'
// 设置
import openSetting from './openSetting.js'
import getSetting from './getSetting.js'
// 微信运动
import getWeRunData from './getWeRunData.js'
// 打开小程序
import navigateToMiniProgram from './navigateToMiniProgram.js'
import navigateBackMiniProgram from './navigateBackMiniProgram.js'
// 获取发票抬头
import chooseInvoiceTitle from './chooseInvoiceTitle.js'
// 生物认证
import checkIsSupportSoterAuthentication from './checkIsSupportSoterAuthentication.js'
import startSoterAuthentication from './startSoterAuthentication.js'
import checkIsSoterEnrolledInDevice from './checkIsSoterEnrolledInDevice.js'

// 支付 - 不可用
// import requestPayment from './requestPayment.js'


export default (store, { _console }) => {
  // 页面跳转
  const navigateTo_store = navigateTo(store)
  const redirectTo_store = redirectTo(store)
  const switchTab_store = switchTab(store)
  const navigateBack_store = navigateBack(store)
  const reLaunch_store = reLaunch(store)

  // 请求
  const request_store = request(store, { showToast, reLaunch, _console })
  const uploadFile_store = uploadFile(store, { showToast, reLaunch })

  return {
    showModal,
    showToast,
    hideToast,
    showLoading,
    hideLoading,
    navigateTo: navigateTo_store,
    redirectTo: redirectTo_store,
    switchTab: switchTab_store,
    navigateBack: navigateBack_store,
    reLaunch: reLaunch_store,
    pageScrollTo,
    startPullDownRefresh,
    stopPullDownRefresh,
    login,
    checkSession,
    authorize,
    getUserInfo,
    showShareMenu,
    hideShareMenu,
    updateShareMenu,
    getShareInfo,
    chooseAddress,
    getSetting,
    openSetting,
    getWeRunData,
    navigateToMiniProgram,
    navigateBackMiniProgram,
    chooseInvoiceTitle,
    checkIsSupportSoterAuthentication,
    startSoterAuthentication,
    checkIsSoterEnrolledInDevice,
    request: request_store,
    getStorage,
    getStorageInfo,
    removeStorage,
    clearStorage,
    getSystemInfo,
    getNetworkType,
    onNetworkStatusChange,
    setStorage,
    setNavigationBarTitle,
    showNavigationBarLoading,
    hideNavigationBarLoading,
    setNavigationBarColor,
    setTabBarBadge,
    removeTabBarBadge,
    showTabBarRedDot,
    hideTabBarRedDot,
    setTabBarStyle,
    setTabBarItem,
    showTabBar,
    hideTabBar,
    setTopBarText,
    chooseImage,
    previewImage,
    getImageInfo,
    saveImageToPhotosAlbum,
    showActionSheet,
    getLocation,
    chooseLocation,
    openLocation,
    loadRequest: loadRequest(request_store),
    uploadFile: uploadFile_store,
    uploadFileList: uploadFileList(uploadFile_store),
    makePhoneCall,
    downloadFile,
    saveFile,
    getFileInfo,
    getSavedFileList,
    getSavedFileInfo,
    removeSavedFile,
    openDocument,
    scanCode,
    setClipboardData,
    getClipboardData,
    setScreenBrightness,
    getScreenBrightness,
    setKeepScreenOn,
    onUserCaptureScreen,
    addPhoneContact,
    // requestPayment
  }
}