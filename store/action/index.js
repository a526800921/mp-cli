import currie from './currie.js'
import actionTest from './action_test.js'

// action集中放入该数组
const actionList = [
  actionTest
]

export default function action(store) {
  // 统一控制store
  return {
    ...currie(store, actionList)
  }
}