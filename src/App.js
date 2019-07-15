import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import './assets/styles/App.less'
//子组件
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Nav from './pages/Nav/Nav'
import Error404 from './pages/Error404/Error404'
//引入状态
import store from './store/store'
import { Provider } from 'react-redux'

//应用程序入口容器组件
export default class APP extends Component {
  render() {
    return (
      <div className='app-container'>
        <Provider store={store}>
          <HashRouter>

            <Switch>
              <Route path='/' exact component={Nav} />
              <Route path='/login' component={Login} />
              <Route path='/reg' component={Register} />
              <Route component={Error404} />
            </Switch>
          </HashRouter>
        </Provider>
      </div>
    )
  }

}
