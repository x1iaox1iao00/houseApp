import { createStore } from 'redux'
import reducers from './reducers'
//创建仓库并暴露
export default createStore(reducers)