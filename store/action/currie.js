export default function currie(store, actionList) {
  // 引入时的柯里化
  return actionList.map(action => mapAction(store, action)).reduce((action1, action2) => Object.assign(action1, action2), {})
}

function mapAction(store, action) {
  // 使用时的柯里化
  let newAction = {}
  for (const key in action) {
    if (action.hasOwnProperty(key)) {
      newAction[key] = function (value) {
        action[key](store, value)
      }
    }
  }

  return newAction
}