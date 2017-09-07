import React, { Component } from 'react';
/*
import * as actions from '../Redux/Action/action';
import { connect } from 'react-redux';
import store from '../Redux/Store/store';
import { browserHistory } from 'react-router';
*/
import '../Style/fromInfo.css';

class Order extends Component {
  render() {
  return (
  <div className="fromInfo bgBox">
    <div className='item'>
      <label>客户姓名</label>
      <input type='text' ref='customer_name'/>
    </div>
    <div className='item'>
      <label>客户身份证</label>
      <input type='text' ref='customer_idnumber'/>
    </div>
    <div className='item'>
      <label>合同编号</label>
      <input type='text' ref='contract_no'/>
    </div>
    <div className='item'>
      <label>购买产品</label>
      <input type='text' ref='product_id'/>
    </div>
    <div className='item'>
      <label>开户银行</label>
      <input type='text' ref='bank_name'/>
    </div>
    <div className='item'>
      <label>银行账号</label>
      <input type='text' ref='bank_account'/>
    </div>
    <div className='item'>
      <label>购买金额</label>
      <input type='text' ref='amount'/>
    </div>
    <div className='item'>
      <label>合同期限</label>
      <input type='text' ref='contract_duration'/>
    </div>
    <button>确 定</button>
  </div>
)
}
}
export default Order;
/*
class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {
          contract_no: '',
          product_id: '',
          customer_name: '',
          customer_idnumber: '',
          bank_name: '',
          bank_account: '',
          amount: '',
          contract_duration: ''
      }
  }
  onChange(type,e) {
      this.setState({[type] :e.target.value});
  }
  componentDidMount(){
    if(this.props.location.pathname.includes('updateOrder')){
      store.dispatch(actions.fetchSearchOrderPosts({id:this.props.match.params.id})).then(()=>{
        this.setState({
          contract_no: this.props.payload[0].contract_no,
          product_id: this.props.payload[0].product_id,
          customer_name: this.props.payload[0].customer_name,
          customer_idnumber: this.props.payload[0].customer_idnumber,
          bank_name: this.props.payload[0].bank_name,
          bank_account: this.props.payload[0].bank_account,
          amount: this.props.payload[0].amount,
          contract_duration: this.props.payload[0].contract_duration
        })
      });
    }
  }
  add(){
    const data = {};
    data.customer_id = parseInt(this.props.params.id);
    data.contract_no = this.refs.contract_no.value.trim();
    data.product_id = parseInt(this.refs.product_id.value.trim());
    data.customer_name = this.refs.customer_name.value.trim();
    data.customer_idnumber = this.refs.customer_idnumber.value.trim();
    data.bank_name = this.refs.bank_name.value.trim();
    data.bank_account = this.refs.bank_account.value.trim();
    data.amount = this.refs.amount.value.trim();
    data.contract_duration = parseInt(this.refs.contract_duration.value.trim());
    if(this.props.location.pathname.includes('addOrder')){
      store.dispatch(actions.fetchAddOrderPosts(data)).then(()=>{
        browserHistory.push('/searchOrder')
      });
    }else if(this.props.location.pathname.includes('updateOrder')){
      store.dispatch(actions.fetchUpdateOrderPosts(data)).then(()=>{
        browserHistory.push('/searchOrder')
      });
    }
  }
  render() {
    return (
      <div className="AddOrder">
        <div className='item'>
          <label>客户姓名</label>
          <input type='text' ref='customer_name' onChange={this.onChange.bind(this,'customer_name')} value={this.state.customer_name} />
        </div>
        <div className='item'>
          <label>客户身份证</label>
          <input type='text' ref='customer_idnumber' onChange={this.onChange.bind(this,'customer_idnumber')} value={this.state.customer_idnumber}/>
        </div>
        <div className='item'>
          <label>合同编号</label>
          <input type='text' ref='contract_no' onChange={this.onChange.bind(this,'contract_no')} value={this.state.contract_no}/>
        </div>
        <div className='item'>
          <label>购买产品</label>
          <input type='text' ref='product_id' onChange={this.onChange.bind(this,'product_id')} value={this.state.product_id}/>
        </div>
        <div className='item'>
          <label>开户银行</label>
          <input type='text' ref='bank_name' onChange={this.onChange.bind(this,'bank_name')} value={this.state.bank_name}/>
        </div>
        <div className='item'>
          <label>银行账号</label>
          <input type='text' ref='bank_account' onChange={this.onChange.bind(this,'bank_account')} value={this.state.bank_account}/>
        </div>
        <div className='item'>
          <label>购买金额</label>
          <input type='text' ref='amount' onChange={this.onChange.bind(this,'amount')} value={this.state.amount}/>
        </div>
        <div className='item'>
          <label>合同期限</label>
          <input type='text' ref='contract_duration' onChange={this.onChange.bind(this,'contract_duration')} value={this.state.contract_duration}/>
        </div>
        <button onClick={this.add.bind(this)}>确定</button>
      </div>
    );
  }
}

function mapStateToProps(state,props) {
  return {
    payload: state.searchOrder.payload
  }
}

const Order = connect(
  mapStateToProps
)(Main);

export default Order;
*/