import React, { Component,PropTypes } from 'react';
import { NavLink } from 'react-router-dom';

import '../Style/mainLeft.css';

const MainLeft = ({ match }) => {
  return (
    <div className="MainLeft">
      <header>企用</header>
      <ul>
        <li><NavLink to={`${match.url}/addClient`} activeClassName="selected">添加客户</NavLink></li>
        <li><NavLink to={`${match.url}/searchClient`} activeClassName="selected">查询客户</NavLink></li>
        <li><NavLink to={`${match.url}/searchOrder`} activeClassName="selected">查询订单</NavLink></li>
        <li><NavLink to={`${match.url}/home`} activeClassName="selected">home</NavLink></li>
        <li><NavLink to={`${match.url}/about`} activeClassName="selected">about</NavLink></li>
        <li><NavLink to={`${match.url}/my`} activeClassName="selected">my</NavLink></li>
        <li><NavLink to={`${match.url}/ios`} activeClassName="selected">ios</NavLink></li>
        <li><NavLink to={`${match.url}/list`} activeClassName="selected">list</NavLink></li>
      </ul>
    </div>
  )
}

export default MainLeft;
