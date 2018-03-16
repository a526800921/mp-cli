/* 
 * @Readme: 在action、state文件夹创建属于自己的store，并在其内部index内统一引入
 */
import state from './state/index.js'
import action from './action/index.js'

let newState = { ...state } // 为了保持action的引用

export default Object.assign(newState, action(newState))