import React, { Component } from 'react'
import HouseItem from '../../components/HouseItem'
import './History.less'
//引入数据
import { connect } from 'react-redux'
//历史
class History extends Component {
  render() {
    return (
      <div className="history-container">
        <p>浏览历史</p>
        {
          this.props.historyHousesList.length === 0 ? <span>暂无历史记录</span> :
            //遍历
            this.props.historyHousesList.map(item => {
              //使用组件
              return (
                <div key={item._id}>
                  <small>浏览时间：{this.getTimeX(item.date)}</small>
                  <HouseItem item={item} />
                </div>)
            })
        }
      </div>
    )
  }
  //返回时间
  // getTimeStr(date) {//拼接点击时间
  //   return `${date.getFullYear()}/${date.getUTCMouth()}/${date.getUTCDate()} ${date.getUTCHours}:${date.getUTCMinutes}:${date.getUTCSeconds}`
  // }
  getTimeX(OldDate) {
    let date = new Date(new Date().getTime() - OldDate.getTime())
    // console.log(OldDate)
    if(date.getUTCMouth>1){
      return '1个月前'
    }else{
       return `${date.getUTCDate()-1}天前`
    }
  }
}
//过滤函数，必须要返回值
function filter(store) {
  return {
    historyHousesList: store.historyHousesList
  }
}
//暴露
export default connect(filter)(History)
