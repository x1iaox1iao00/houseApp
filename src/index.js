import React from 'react';
import ReactDOM from 'react-dom';
import App from "./APP.js"
//引入UI框架全局CSS
import 'antd-mobile/dist/antd-mobile.css'

//入口
ReactDOM.render(<App />, document.getElementById('root'))

//拿到创建仓库函数
// import { createStore } from 'redux'
/* store(状态仓库：数据的存储)
state:当前store内保存的数据
action:本次的通知对象(是一个对象有一个属性type:区分本次action要做什么事情,内容全大写)
 */
// const store = createStore(function (state = '', action) {
//     switch (action.type) {
//         case '': return action.name
//         default: return state
//     }
// })
//reducer(计算者：计算状态，返回新的数据给store,覆盖更新)=>function(state,action){}
//action（通知reducer重新计算状态，返回给store）
//store.dispatch({type: ,name: }):发送通知
