import React, { Component } from 'react'
import { WhiteSpace, Card,Grid } from 'antd-mobile'
import './MainHouseInfo.less'

export default class MainHouseInfo extends Component {
  constructor(p) {
    super(p)
    this.state = {
      //定义数据
      data:[{
        icon: require('../../assets/imgs/qianbao.png'),
        text: '我要贷款',
      }, {
        icon: require('../../assets/imgs/jisuanqilishuai-xianxing-xi.png'),
        text: '房贷计算',
      }, {
        icon: require('../../assets/imgs/zhishi.png'),
        text: '知识'
      
      }, {
        icon: require('../../assets/imgs/saoyisao.png'),
        text: '扫一扫'
      
      }]
    }
  };
  render() {
    return (
      <div className="houseinfo">
        <WhiteSpace size="xs" />
        {/* 卡片 */}
        <Card full>
        {/* 头部 */}
          <Card.Header
            title="房产全百科"
            extra={<span>专业的买房攻略</span>}
          />
          {/* 内容 */}
          <Card.Body>
          <Grid data={this.state.data}hasLine={false} square={false} isCarousel onClick={_el => console.log(_el)} />
          </Card.Body>
        </Card>
      </div>
    )
  }
}
