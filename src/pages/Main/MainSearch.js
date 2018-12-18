import React, { Component } from 'react'
// import { WingBlank,SearchBar } from 'antd-mobile'

import './MainSearch.less'
//顶部搜索
export default class MainSearch extends Component {
  constructor(p) {
    super(p)
    this.state = {
      city: '定位中'
    }
  }
  render() {
    return (
      <div className="search-container">
        <label>{this.state.city}▼</label>
        <div className="search-div">
          <img src={require('../../assets/imgs/sousuo.png')} alt="图片" />
          <label>挑好房，上嗨购房APP</label>
        </div>
        <img src={require('../../assets/imgs/ditu.png')} alt="图片" />
      </div>
    )
  }
  //页面加载完成后使用腾讯地图组件->前端定位组件获取位置
  componentDidMount() {
    // MWZBZ-WYOWO-NVQWN-STNF6-2EHH2-EYBGT
    var geolocation = new window.qq.maps.Geolocation("MWZBZ-WYOWO-NVQWN-STNF6-2EHH2-EYBGT", "myapp");
    var options = { timeout: 8000 };
    var showPosition = (position) => {
      // console.log(position)
      if(position.city!==''){
      this.setState({ city: position.city })
      }else{ this.setState({ city:"手动定位" })}
    };
    function showErr() {
      alert("定位失败！");
    };
    geolocation.getLocation(showPosition, showErr, options)
  }

}
