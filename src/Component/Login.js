import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import * as actions from '../Redux/Action/action';
//import { connect } from 'react-redux';
//import store from '../Redux/Store/store';
import '../Style/login.css';

class Login extends Component {
  login() {
    this.props.history.push('/main/home');
  }
  render() {
    return (
      <div className="Login">
        <div className="loginBox">
          <div className='log'>Mi</div> 
          <div className="inputBox">
            <input type='text' ref="username"/>
            <span className="solid"></span>
            <label>Telephone/Email</label>
          </div>             
          <div className="inputBox">
            <input type='password' ref="password"/>
            <span className="solid"></span>
            <label>Password</label>
          </div>       
          <button onClick={this.login.bind(this)}>登 录</button>
          <div className="box">
            <Link to="#" className='left'>注册</Link>
            <input type='checkbox' className="checkbox"/>
            <a href="https://github.com" className='right'>QQ登录</a>
          </div>
        </div>      
      </div>
    )
  }
}

export default Login
/*
class Main extends Component {
  login() {
    const data = {};
    data.username = this.refs.username.value.trim();
    data.password = this.refs.password.value.trim();
    if(data.user != '' && data.password != ''){
      store.dispatch(actions.fetchLoginPosts(data)).then(()=>{
        if(this.props.payload.success){
          sessionStorage.setItem('userid',this.props.payload.userid);
          sessionStorage.setItem('access_token',this.props.payload.access_token);
          this.props.history.push('/main/home');
        }
      });
    }else{
        alert('不能为空');
    }
  }
  handleCheckbox(e){
    console.log(e.target.checked)
  }
  render() {
    return (
      <div className="Login">
        <img src="" />
        <input type='text' placeholder="电话/邮箱"
        ref="username"/>
        <input type='password' placeholder="密码"
        ref="password"/>
        <button onClick={this.login.bind(this)}>登录</button>
        <div className="box">
          <Link to="#" className='left'>注册</Link>
          <input type='checkbox' className="checkbox" onChange={this.handleCheckbox.bind(this)}/>
          <a href="https://github.com" className='right'>QQ登录</a>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    payload: state.login.payload
  }
}

const Login = connect(
  mapStateToProps
)(Main);
*/
