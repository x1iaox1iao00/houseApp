import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
// 子组件
import Main from '../Main/Main'//首页
import Chat from '../Chat/Chat'//微聊
import History from '../History/History'//历史
import Mine from '../Mine/Mine'//我的

// 样式
import './Nav.less'
//导航
export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }
  renderContent(pageText) {
    switch (pageText) {
      case 'Main': return <Main />
      case 'Chat': return <Chat />
      case 'History': return <History />
      default: return <Mine />
    }

  }
  render() {
    return (
      <div className="nav-container">
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
          <TabBar
            unselectedTintColor="#949494"//文字未选中的颜色
            tintColor="rgb(146, 76, 211)"//文字选中的颜色
            barTintColor="white"//tabBar背景色
          >
            {/* 首页 */}
            <TabBar.Item
              title="首页"//文字
              key="Main"//id
              // 未选中图标
              icon={
                <img src={require('../../assets/imgs/shouye1.png')} alt="图片" style={{ width: '24px', height: '24px' }} />
              }
              //选中的图标
              selectedIcon={
                <img src={require('../../assets/imgs/shouye.png')} alt="图片" style={{ width: '24px', height: '24px' }} />
              }
              //是否选中
              selected={this.state.selectedTab === 'blueTab'}
              // 点击回调
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
              }}
            >
              {/* 渲染子屏幕的函数 */}
              {this.renderContent('Main')}
            </TabBar.Item>
            {/* 微聊 */}
            <TabBar.Item
              icon={
                <img src={require('../../assets/imgs/qun1.png')} alt="图片" style={{ width: '24px', height: '24px' }} />
              }
              selectedIcon={
                <img src={require('../../assets/imgs/qun.png')} alt="图片" style={{ width: '24px', height: '24px' }} />
              }
              title="微聊"
              key="Chat"
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                });
              }}
            >
              {this.renderContent('Chat')}
            </TabBar.Item>
            {/* 历史 */}
            <TabBar.Item
              icon={
                <img src={require('../../assets/imgs/shijian1.png')} alt="图片" style={{ width: '24px', height: '24px' }} />
              }
              selectedIcon={
                <img src={require('../../assets/imgs/shijian.png')} alt="图片" style={{ width: '24px', height: '24px' }} />
              }
              title="历史"
              key="History"
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                });
              }}
            >
              {this.renderContent('History')}
            </TabBar.Item>
            {/* 我的 */}
            <TabBar.Item
              icon={
                <img src={require('../../assets/imgs/tongxunlu1.png')} alt="图片" style={{ width: '24px', height: '24px' }} />
              }
              selectedIcon={
                <img src={require('../../assets/imgs/tongxunlu.png')} alt="图片" style={{ width: '24px', height: '24px' }} />
              }
              title="我的"
              key="Mine"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab',
                });
              }}
            >
              {this.renderContent('Mine')}
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    )
  }
}
