import React, { Component } from 'react'
import './Error404.less'
//容错页面
export default class Error404 extends Component {
  render() {
    return (
      <div className="page404">
        {/* <a class="icon" href="http://m.house.qq.com" bosszone="boss3355,errorpape-home"></a> */}
        <div className="tip">对不起，您找的页面去南极度假了</div>
      </div>
    )
  }
}
