import injectStore from './injectStore.js'
import _global from './_global.js'

// action集中放入该数组
const actionList = [
  _global,
]

export default store => {
  // 统一控制store
  const actionGather = injectStore(store, actionList)

  return (action, ...value) => actionGather[action](...value)
}