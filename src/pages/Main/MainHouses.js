import React, { Component } from 'react'
import HouseItem from '../../components/HouseItem'
import {Toast} from 'antd-mobile'
import './MainHouse.less'
import { req } from '../../Request/Req'


//猜你喜欢
export default class MainHouses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HouseList: []
    };
  }
  render() {
    return (
      <div className="houses-container">
        <p>猜你喜欢</p>
      {
      this.state.HouseList.map(item =>
        <HouseItem key={item._id} item={item} />
      )
      }</div>
    )
  }

  componentDidMount() {
   //显示加载
   Toast.loading('正在努力加载',0,null,false);
    //响应数据
    let params = { page: 1, rows: 10 }
    req('api/getHouseInfo', (res) => {
    //关闭loading
    Toast.hide()
      // console.log(res);
      this.setState({ HouseList:res.data.rows })
    }, params, 'get')
  }
}

