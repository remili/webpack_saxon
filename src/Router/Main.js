import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

//import logo from '../Images/logo.svg';
//import MainLeft from './MainLeft';
import MainRightTop from './MainRightTop';
import Home from '../Component/Home';
import About from '../Component/About';
import List from '../Component/List';
import Order from '../Component/Order';
import Client from '../Component/Client';
import My from '../Component/My';
import Ios from '../Component/Ios';
import SearchClient from '../Component/SearchClient';
import SearchOrder from '../Component/SearchOrder';
import NoMatch from '../Component/NoMatch';
import PrivateRoute from '../Component/PrivateRoute';
import '../Style/main.css';
import '../Style/mainLeft.css';
import '../Style/mainRightTop.css';

class Main extends Component{
  render() {
    return (
      <div className="Main">
        <div className="MainLeft">
          <header>企用</header>
          <ul>
            <li><NavLink to={`${this.props.match.url}/addClient`} activeClassName="selected">添加客户</NavLink></li>
            <li><NavLink to={`${this.props.match.url}/searchClient`} activeClassName="selected">查询客户</NavLink></li>
            <li><NavLink to={`${this.props.match.url}/searchOrder`} activeClassName="selected">查询订单</NavLink></li>
            <li><NavLink to={`${this.props.match.url}/home`} activeClassName="selected">home</NavLink></li>
            <li><NavLink to={`${this.props.match.url}/about`} activeClassName="selected">about</NavLink></li>
            <li><NavLink to={`${this.props.match.url}/my`} activeClassName="selected">my</NavLink></li>
            <li><NavLink to={`${this.props.match.url}/ios`} activeClassName="selected">ios</NavLink></li>
            <li><NavLink to={`${this.props.match.url}/list`} activeClassName="selected">list</NavLink></li>
          </ul>
        </div>
        <div className="MainRight">
          <MainRightTop />
          <div className="MainRightBottom">
            <Switch>
              <PrivateRoute exact strict path={`${this.props.match.url}/home`} component={Home}/>
              <PrivateRoute exact strict path={`${this.props.match.url}/about`} component={About}/>
              <PrivateRoute exact strict path={`${this.props.match.url}/list`} component={List}/>
              <PrivateRoute exact strict path={`${this.props.match.url}/addClient`} component={Client}/>
              <PrivateRoute strict path={`${this.props.match.url}/addClient/:id`} component={Client}/>
              <PrivateRoute strict path={`${this.props.match.url}/updeteClient/:id`} component={Client}/>
              <PrivateRoute exact strict path={`${this.props.match.url}/addOrder`} component={Order}/>
              <PrivateRoute strict path={`${this.props.match.url}/addOrder/:id`} component={Order}/>
              <PrivateRoute strict path={`${this.props.match.url}/updateOrder/:id`} component={Order}/>
              <PrivateRoute exact strict path={`${this.props.match.url}/my`} component={My}/>
              <PrivateRoute exact strict path={`${this.props.match.url}/ios`} component={Ios}/>
              <PrivateRoute exact strict path={`${this.props.match.url}/searchClient`} component={SearchClient}/>
              <PrivateRoute strict path={`${this.props.match.url}/searchClient`} component={SearchClient}/>
              <PrivateRoute exact strict path={`${this.props.match.url}/searchOrder`} component={SearchOrder}/>
              <PrivateRoute strict path={`${this.props.match.url}/searchOrder`} component={SearchOrder}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
