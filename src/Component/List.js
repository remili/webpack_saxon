import React, { Component } from 'react';
import '../Style/list.css';

class List extends Component {
  render() {
    return (
      <div className="List bgBox">
          <header>消息</header>
          <ul>
            <li>
              <img src="#"/>
              【重要通知】应广告应广告应广告应广告应广告应广告应广告
              <span>2016-05-03</span>
            </li>          
          </ul>
      </div>
    );
  }
}

export default List;
