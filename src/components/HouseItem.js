import React, { Component } from 'react'
import './HouseItem.less'
import { SOURCES_IP } from '../Request/Req'
//引入连接函数
import {connect} from 'react-redux'
//引入添加到历史的函数
import addHistoryHouseItem from '../store/actions'

 class HouseItem extends Component {
    static defaultProps = {
        img: '',
        name: '',//楼盘名称
        area: '',//楼盘区域
        business: '',//商圈
        info: '',//房型描述
        acreage: '',//面积
        price: '' //均价
    }

    render() {
        //获取数据并解构
        var { img, name, area, business, acreage, price, info } = this.props.item;
        return (
            <div className="houseItem-container" onClick={this.clickHouse.bind(this)}>
                {/* 左侧图片 */}
                <img src={img === '' ? require('../assets/imgs/img404.jpg') : SOURCES_IP + img} alt="图片" />
                {/* 右侧信息 */}
                <div className="right-container">
                    <div className="left-div">
                        <label>{name}</label>
                        <label>{area}&emsp;{business}</label>
                        <label>{info}&emsp;{acreage===''?'暂无':price+'/平'}</label>
                    </div>
                    {/* 价格 */}
                    <div className="right-div">
                        <label>{price==='暂无均价'?'暂无均价':price+'/平'}</label>
                    </div>
                </div>

            </div>
        )
    }
    //点击增加到历史
    clickHouse(){
        //放入状态机时，记录时间
       this.props.dispatch(addHistoryHouseItem({...this.props.item,date:new Date()}))
    }
}

export default  connect()(HouseItem)
