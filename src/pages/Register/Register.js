import React, { Component } from 'react'
import logo from '../../assets/imgs/logo3.png'
import './Register.less'
import { InputItem, Button, Flex, WingBlank, WhiteSpace, Radio } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { req } from '../../Request/Req'

//注册
export default class Register extends Component {
  constructor(p) {
    super(p)
    this.state = {
      username: "",
      pwd: ""
    }
  }
  render() {
    return (
      <div className="reg-container">
        <div className="cover">
          <Flex justify="center">
            <img src={logo} style={{ width: '18rem', height: '6rem' }} alt="logo" />
          </Flex>
          <WingBlank size='lg'>
            <WhiteSpace size="xl" />

            <InputItem placeholder="请输入手机号" type="text" value={this.state.username}
              onChange={(newValue) => { this.setState({ username: newValue }) }}>
            </InputItem>
            <WhiteSpace size="lg" />
            <InputItem placeholder="请输入密码" type="password" value={this.state.pwd}
              onChange={(newValue) => { this.setState({ pwd: newValue }) }}>
            </InputItem>
            <WhiteSpace size="lg" />
            <InputItem placeholder="请输入验证码" type="text">
            </InputItem>
            <span className="checkCode">获取验证码</span>

            <Flex>
              <Flex.Item>
                <Radio className="my-radio" checked onChange={e => console.log('checkbox', e)}>我已同意使用《用户服务协议和《隐私权政策》</Radio>
              </Flex.Item>
            </Flex>
            <WhiteSpace size="lg" />
            <Button type="primary" onClick={this.clickReg.bind(this)}>立即注册</Button>
            <WhiteSpace size="lg" />
            <Link to='/login'>已有账号</Link>

          </WingBlank>
        </div>
      </div>
    )
  }
  clickReg() {
    let param = { username: this.state.username}
    //发送ajax到服务器地址
    req('/api/checkUnameRepeat', (res) => {
      if (res.data ===1) {
        req( '/api/reg', (res) => {
          if (res.status===200 ) {
            this.props.history.push('/login')
            // console.log(res)
          } else {
            alert('注册失败')
            // this.setState({ isShow: 'block' })
          }
        }, param, 'post')
      } 
      else {
        alert('用户名已存在')
      }
    },param, 'get')
  }

}
