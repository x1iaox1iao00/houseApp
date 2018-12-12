import React, { Component } from 'react'
import {HashRouter,Switch,Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Nav from './pages/Nav/Nav'

//应用程序入口容器组件
export default class APP extends Component {
  render() {
    return (
      <div>
          <HashRouter>
              <Switch>
                 <Route path='/' exact component={Nav}/> 
                 <Route path='/login' component={Login}/> 
                 <Route path='/reg' component={Register}/> 
                 <Route  component={Nav}/> 
              </Switch>
          </HashRouter>
        
      </div>
    )
  }
}
