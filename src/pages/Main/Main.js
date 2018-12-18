import React, { Component } from 'react'
import './Main.less'
//引入子组件
import MainSearch from './MainSearch'
//搜素
import MainCarsoul from './MainCarsoul'  
//轮播
import MainIcons from './MainIcons'
//菜单按钮
import MainHouseInfo from './MainHouseInfo'
//房产百科
import MainHouses from './MainHouses'
//猜你喜欢
//首页
export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <MainSearch />
        <MainCarsoul />
        <MainIcons/>
        <MainHouseInfo/>
        <MainHouses/>
      </div>
    )
  }
}
