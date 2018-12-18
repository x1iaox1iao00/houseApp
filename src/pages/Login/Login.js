import React, { Component } from 'react'
import { InputItem, Button, Flex, WingBlank, WhiteSpace } from 'antd-mobile'
import { Link } from 'react-router-dom'
import {req} from '../../Request/Req'
import './Login.less'
//logo图片
import logo from '../../assets/imgs/logo3.png'
// 登录页面
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      pwd: "",
      isShow: 'none'
    }
  }
  render() {
    return (
      <div className='login-container'>
      <div className="cover">
        {/* Logo */}
        <Flex justify="center">
          <img src={logo} style={{ width: '18rem', height: '6rem' }} alt="logo" />
        </Flex>

        <WhiteSpace size="lg" />
        {/* 用户名*/}
        <WingBlank size='lg'>
          <InputItem placeholder="请输入手机号" value={this.state.username}
            onChange={(newValue) => { this.setState({ username: newValue }) }} clear>
            <img src={require('../../assets/imgs/yonghu.png')} alt='图片' />
            <div />
          </InputItem>
          {/*密码 */}
          <WhiteSpace size="lg" />
          <InputItem placeholder="请输入密码" type="password" value={this.state.pwd}
            onChange={(newPwd) => { this.setState({ pwd: newPwd }) }} clear>
            <img src={require('../../assets/imgs/mima.png')} alt='图片' />
            <div />
          </InputItem>
          <WhiteSpace size="lg" />
          {/* 错误提示 */}
          <p style={{ color: 'red', display: this.state.isShow }}>用户名或密码错误</p>
          <WhiteSpace size="lg" />

          <Button type="primary" onClick={this.clickLogin.bind(this)}>登录</Button>
          <WhiteSpace size="lg" />
          {/* 注册 */}
          <Flex justify="between">
            <Link to='/reg'>手机快速注册</Link>
            <Link to='/'>忘记密码</Link>
          </Flex>
        </WingBlank>
        </div>
      </div>
    )
  }
  //点击登录，发送ajax请求
  clickLogin() {
    let param = {username:this.state.username,pwd: this.state.pwd }
    //发送ajax到服务器地址
    req('/api/login', (res) => {
      if (res.data === 'pass') {
        this.props.history.push('/')
        //存储用户登录信息
       localStorage.username=this.state.username

      } else {
        this.setState({ isShow: 'block' })
      }
    }, param, 'post')
  }
}

