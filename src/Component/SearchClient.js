import React, { Component } from 'react';
/*
import store from '../Redux/Store/store';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../Redux/Action/action';
*/
import '../Style/search.css';

class SearchClient extends Component {
  render() {
    return (
      <div className="Search bgBox">
          <div>
            查询条件
            <select ref='type'>
              <option value='1'>全部</option>
              <option value='2'>姓名</option>
              <option value='3'>身份证</option>
            </select>
            <input type='text' ref='text'/>
            <button>查询</button>
          </div>
          <div>本次查询结果 记录数：条</div>
          <ul className='table'>
            <li>
              <span>姓名</span>
              <span>身份证号</span>
              <span>电话号码</span>
              <span>登记时间</span>
              <span>操作</span>
            </li>        
          </ul>
      </div>
    )
  }
}
export default SearchClient;
/*
class Main extends Component {
  search(){
    const data = {};
    if(this.refs.type.value == 2)
      data.name = this.refs.text.value.trim();
    else if(this.refs.type.value == 3)
      data.id_number = this.refs.text.value.trim();
    store.dispatch(actions.fetchSearchClientPosts(data));
  }
  componentDidMount(){
    if(this.props.match.params.id){
      store.dispatch(actions.fetchSearchClientPosts());
    }
  }
  render() {
    return (
      <div className="Search">
          <div>
            查询条件
            <select ref='type'>
              <option value='1'>全部</option>
              <option value='2'>姓名</option>
              <option value='3'>身份证</option>
            </select>
            <input type='text' ref='text'/>
            <button onClick={this.search.bind(this)}>查询</button>
          </div>
          <div>本次查询结果 记录数：条</div>
          <ul className='table'>
            <li>
              <span>姓名</span>
              <span>身份证号</span>
              <span>电话号码</span>
              <span>登记时间</span>
              <span>操作</span>
            </li>
            { this.props.payload.map( (e,index) => {
                return (<li key={index}>
                  <span>{e.name}</span>
                  <span>{e.id_number}</span>
                  <span>{e.telephone}</span>
                  <span>{e._id}</span>
                  <span><Link to={`/main/updeteClient/${e._id}`}>编辑</Link>&nbsp;&nbsp;<Link to={`/addOrder/${e._id}`}>添加订单</Link></span>
                </li>)
            })}
          </ul>
      </div>
    )
  }
}

function mapStateToProps(state,props) {
  return {
    payload: state.searchClient.payload
  }
}

const SearchClient = connect(
  mapStateToProps
)(Main);

export default SearchClient;
*/