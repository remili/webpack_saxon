import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import '../Style/mainRightTop.css';

class MainRightTop extends Component {
  out(){
    localStorage.clear();
    browserHistory.push('/');
  }
  render() {
    return (
      <div className="MainRightTop">
        <header>我的应用</header>
        <nav>
            <a href='#'>用户名</a>
            |
            <a href='#'>最新通知</a>
            |
            <a href='javascript:void(0)' onClick={this.out.bind(this)}>退出</a>
        </nav>
      </div>
    );
  }
}

export default MainRightTop;
