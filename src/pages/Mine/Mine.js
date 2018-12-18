import React, { Component } from 'react'
import { WhiteSpace } from 'antd-mobile'
import { Link } from 'react-router-dom'
import './Mine.less'
import { List } from 'antd-mobile'
const Item = List.Item
//我的
export default class Mine extends Component {
  constructor(p) {
    super(p)
    this.state = {
      data: [{
        id: 1,
        img: 'jifen.png',
        name: '我的积分'
      }, {
        id: 2,
        img: 'dingyue.png',
        name: '我的订阅'
      }, {
        id: 3,
        img: 'qunzu.png',
        name: '微聊联系人'
      }, '', {
        id: 4,
        img: 'jisuanqilishuai-xianxing-xi.png',
        name: '房贷计算器'
      }, {
        id: 5,
        img: 'jiaxingshoucang.png',
        name: '我的房子'
      }, '', {
        id: 6,
        img:'shijian.png',
        name: '我的看房记录'
      }, {
        id: 7,
        img: 'yonghu.png',
        name: '我的问答'
      }, '', {
        id: 8,
        img: 'shezhi.png',
        name: '设置'
      }, {
        id: 9,
        img:'yijianfankui.png',
        name: '意见反馈'
      },'', {
        id: 10,
        img:'yijianfankui.png',
        name: '退出登录'
      }]
    }
  }
  render() {
    return (
      <div className="my-container">
        {/* 顶部信息 */}
        <div className="top">
          <div className="header">
            <div><img src={require('../../assets/imgs/people.png')} alt="图片" /></div>
            <div>{
              //如果为空显示登录注册，否则显示用户名
              localStorage.username ? <span className="user">您好！{localStorage.username}</span> :
                <div><Link to='/login'>登录/</Link> <Link to='/reg'>注册</Link></div>}
              <p>可以与经纪人发起聊天</p>
            </div>
            <div><img src={require('../../assets/imgs/shezhi4.png')} alt="图片" /></div>
          </div>
          <div className="data">
            <div><p>0</p><p><img src={require('../../assets/imgs/qianbao4.png')} alt="图片" /><span>&emsp;钱包</span></p></div>
            <div className="two"><p>0</p><p><img src={require('../../assets/imgs/youhui4.png')} alt="图片" /><span>&emsp;优惠</span></p></div>
            <div><p>0</p><p><img src={require('../../assets/imgs/jifen4.png')} alt="图片" /><span>&emsp;积分</span></p></div>
          </div>

        </div>
        {/* 列表 */}
        <div className="content">
          <WhiteSpace size="xs" />
          <List >
            {
              this.state.data.map(item => {
                if (item === '') {
                  return <div key={item.id} style={{height:'0.4rem',width:'100%',backgroundColor:'rgba(155, 122, 226,.5)'}}></div>
                } else {
                  if(item.id===10){
                  return < Item
                    key={item.id}
                    thumb={require(`../../assets/imgs/${item.img}`)}
                    arrow="horizontal"
                  onClick={this.signout.bind(this)} 
                  >{item.name}
                  </Item>
                  }else{
                    return < Item
                    key={item.id}
                    thumb={require(`../../assets/imgs/${item.img}`)}
                    arrow="horizontal"
                  onClick={()=>{}} 
                  >{item.name}
                  </Item>
                  }
                }
              })
            } </List>
        </div>
      </div >
    )
  }
  signout(){
    localStorage.username=''
    // this.props.history.push('/login')
  }
}

