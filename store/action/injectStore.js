// 注入store，在使用时无需手动传入store变量

function mapAction(store, action) {
  let newAction = {}
  for (const key in action) {
    if (action.hasOwnProperty(key)) {
      newAction[key] = (...value) => action[key](store, ...value)
    }
  }

  return newAction
}

export default (store, actionList) => actionList.map(action => mapAction(store, action)).reduce((action1, action2) => Object.assign(action1, action2), {})


