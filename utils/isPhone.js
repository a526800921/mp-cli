/*
 * @Author: Jafish 
 * @Date: 2018-02-22 10:09:07 
 * @Last Modified by: Jafish
 * @Last Modified time: 2018-02-23 10:01:10
 * @Action: 电话号码格式验证（11位）
 * @Param: {String, Number} phone - 传入要验证的电话号码
 * @Return: {Boolean} isPhone - 验证是否成功
 */
import isRequired from './verifys/isRequired.js'
import isString from './verifys/isString.js'
import isNumber from './verifys/isNumber.js'

export default (phone = isRequired()) => {
  if (!isString(phone) && !isNumber(+phone)) throw new Error('phone expect is String or Number')

  return /^1[34578][0-9]\d{8}$/.test(phone)
}

