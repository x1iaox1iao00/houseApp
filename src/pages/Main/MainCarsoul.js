import React, { Component } from 'react'
//引入轮播组件
import { Carousel } from 'antd-mobile'
//轮播
export default class MainCarsoul extends Component {
  constructor(p){
    super(p)
    this.state = {
      data: ['0', '1', '2'],
      imgHeight: 176,
    }
  }
  render() {
    return (
      <div>
         <Carousel
         //自动播放
          autoplay={true}
          infinite
        >
        {/* 遍历 */}
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://localhost:3000"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
               //引入图片
                src={require(`../../assets/imgs/${val}.jpg`)}
                alt="图片"
                //图片样式
                style={{ width: '100%', verticalAlign: 'top' }}
                //加载
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    )
  }
}
