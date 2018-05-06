/**
 * 封装的 Component
 * 配置参数见相应js文件
 */

export default store => {

  return (componentData = {}, {

  } = {}) => {

    return Component({
      ...componentData,
      externalClasses: ['class-c', ...(componentData.externalClasses || [])],

    })
  }
}
