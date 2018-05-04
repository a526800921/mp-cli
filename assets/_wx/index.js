// 重新封装微信api
import showModal from './showModal.js'
import showToast from './showToast.js'
import navigateTo from './navigateTo.js'
import login from './login.js'
import getUserInfo from './getUserInfo.js'
import getSetting from './getSetting.js'
import openSetting from './openSetting.js'
import request from './request.js'
import getStorage from './getStorage.js'
import getStorageInfo from './getStorageInfo.js'
import removeStorage from './removeStorage.js'
import clearStorage from './clearStorage.js'

import getSystemInfo from './getSystemInfo.js'
import setStorage from './setStorage.js'
import setNavigationBarTitle from './setNavigationBarTitle.js'
import chooseImage from './chooseImage.js'
import showActionSheet from './showActionSheet.js'
import openLocation from './openLocation.js'
import loadRequest from './loadRequest.js'
import uploadFile from './uploadFile.js'
import uploadFileList from './uploadFileList.js'
import makePhoneCall from './makePhoneCall.js'
import downloadFile from './downloadFile.js'
import openDocument from './openDocument.js'
import scanCode from './scanCode.js'
// import requestPayment from './requestPayment.js'


export default function (store, api) {
  const navigateTo_store = navigateTo(store),
    request_store = request(store),
    uploadFile_store = uploadFile(store, api)

  return {
    showModal,
    showToast,
    navigateTo: navigateTo_store,
    login,
    getUserInfo,
    getSetting,
    openSetting,
    request: request_store,
    getStorage,
    getStorageInfo,
    removeStorage,
    clearStorage,
    getSystemInfo,
    setStorage,
    setNavigationBarTitle,
    chooseImage,
    showActionSheet,
    openLocation,
    loadRequest: loadRequest(request_store),
    uploadFile: uploadFile_store,
    uploadFileList: uploadFileList(uploadFile_store),
    makePhoneCall,
    downloadFile,
    openDocument,
    // requestPayment
    scanCode,
  }
}