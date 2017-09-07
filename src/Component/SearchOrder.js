import React, { Component } from 'react';
/*
import store from '../Redux/Store/store';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../Redux/Action/action';
*/
import '../Style/search.css';
class SearchOrder extends Component {
  render() {
   return ( 
     <div className="Search">
        <div className="bgBox">
          查询条件
          <select ref="type">
            <option value='1'>全部</option>
            <option value='2'>姓名</option>
            <option value='3'>身份证</option>
            <option value='4'>合同号</option>
          </select>
          <input type='text' ref='text' />
          <button>查询</button>
        </div>
        <div>本次查询结果 记录数：条</div>
        <div className="bgBox">
          <ul className='table'>
            <li>
              <span>合同编号</span>
              <span>客户姓名</span>
              <span>身份证号</span>
              <span>购买产品</span>
              <span>购买金额</span>
              <span>合同期限</span>
              <span>购买时间</span>
              <span>操作</span>
            </li> 
            <li>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
            </li>  
            <li>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
            </li>            
          </ul>
          <div className="page">
            <button>上一页</button>
            <button>下一页</button>
          </div>      
        </div>
        
        
    </div>
   )
  }
}

export default SearchOrder;
/*
class Main extends Component {
  search(){
    const data = {};
    if(this.refs.type.value == 2)
      data.name = this.refs.text.value.trim();
    else if(this.refs.type.value == 3)
      data.id_number = this.refs.text.value.trim();
    else if(this.refs.type.value == 4)
      data.contract_no = this.refs.text.value.trim();
    store.dispatch(actions.fetchSearchOrderPosts(data));
  }
  render() {
    console.log(this.props.payload);
    return (
      <div className="Search">
          <div>
            查询条件
            <select ref="type">
              <option value='1'>全部</option>
              <option value='2'>姓名</option>
              <option value='3'>身份证</option>
              <option value='4'>合同号</option>
            </select>
            <input type='text' ref='text' />
            <button onClick={this.search.bind(this)}>查询</button>
          </div>
          <div>本次查询结果 记录数：条</div>
          <ul className='table'>
            <li>
              <span>合同编号</span>
              <span>客户姓名</span>
              <span>身份证号</span>
              <span>购买产品</span>
              <span>购买金额</span>
              <span>合同期限</span>
              <span>购买时间</span>
              <span>操作</span>
            </li>
            { this.props.payload.map( (e,index) => (
              <li key={index}>
                <span>{e.contract_no}</span>
                <span>{e.bank_account}</span>
                <span>{e.bank_account}</span>
                <span>{e.bank_name}</span>
                <span>{e.amount}</span>
                <span>{e.contract_duration}</span>
                <span>{e._id}</span>
                <span><Link to={`/main/updateOrder/${e._id}`}>编辑</Link></span>
              </li>
            ))}
          </ul>
      </div>
    )
  }
}

function mapStateToProps(state,props) {
  return {
    payload: state.searchOrder.payload
  }
}

const SearchOrder = connect(
  mapStateToProps
)(Main);

export default SearchOrder;
*/