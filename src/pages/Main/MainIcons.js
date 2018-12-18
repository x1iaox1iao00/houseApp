import React, { Component } from 'react'
import { Grid } from 'antd-mobile';
import './MainIcons.less'


//菜单按钮
export default class MainIcons extends Component {
  constructor(p) {
    super(p)
    this.state = {
      data:[{
        icon: require('../../assets/imgs/11_03.png'),
        text: '新房',
      }, {
        icon: require('../../assets/imgs/menu_2.png'),
        text: '二手房',
      }, {
        icon: require('../../assets/imgs/11_06.png'),
        text: '租房'
      
      }, {
        icon: require('../../assets/imgs/11_10.png'),
        text: '商铺写字楼'
      
      }, {
        icon: require('../../assets/imgs/menu_5.png'),
        text: '卖房'
      
      }, {
        icon: require('../../assets/imgs/menu_6.png'),
        text: '海外房产'
      
      }, {
        icon: require('../../assets/imgs/11_66.png'),
        text: '服务'
      }
        , {
        icon: require('../../assets/imgs/menu_8.png'),
        text: '问答'
      }]
    }
  };
  render() {

    return (
      
      <Grid data={this.state.data}hasLine={false} square={false} isCarousel onClick={_el => console.log(_el)} />

    )
  }
}

 