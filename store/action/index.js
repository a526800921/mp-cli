import injectStore from './injectStore.js'
import actionTest from './action_test.js'

// action集中放入该数组
const actionList = [
  actionTest,
]

export default store => {
  // 统一控制store
  const actionGather = injectStore(store, actionList)

  return (action, ...value) => actionGather[action](...value)
}