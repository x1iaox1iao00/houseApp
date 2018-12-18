import React, { Component } from 'react'
// import { Button} from 'antd-mobile';
import './Chart.less'
//微聊
export default class Chat extends Component {
  render() {
    return (
      <div className="chat-container">
      {/* 内容 */}
        <div className="content">
        <img src={require('../../assets/imgs/avatar_new.png')} alt="图片"/>
        <p>职业顾问：<span>张小妹</span></p>
        <p>专业服务诚信做人诚信做事</p>
        <button >我要聊天</button>
        </div>
      </div>
    )
  }
}
