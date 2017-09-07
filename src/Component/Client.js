import React, { Component } from 'react';
//import * as actions from '../Redux/Action/action';
//import { connect } from 'react-redux';
//import store from '../Redux/Store/store';
//import { Config } from '../Config/Config';
//import createHistory from 'history/createBrowserHistory';

import '../Style/fromInfo.css';

class Client extends Component {
  render() {
    return (
      <div className="fromInfo bgBox">
        <div className='item'>
          <label>姓名</label>
          <input type='text' ref='name'/>
        </div>
        <div className='item'>
          <label>身份证</label>
            <input type='number' ref='id_number'/>
        </div>
        <div className='item'>
          <label>联系电话</label>
          <input type='number' ref='telephone'/>
        </div>
        <button>确 定</button>
      </div>
    )
  }
}
export default Client;
//const history = createHistory();
/*
class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {
          name: '',
          id_number: '',
          telephone: ''
      }
  }
  onChange(type,e) {
    this.setState({[type]:e.target.value});
  }
  componentDidMount(){
    if(this.props.match.params.id){
      store.dispatch(actions.fetchSearchClientPosts({id:this.props.match.params.id})).then(()=>{
        this.setState({
          name :this.props.payload[0].name,
          id_number :this.props.payload[0].id_number,
          telephone :this.props.payload[0].telephone
        })
      })
    }
  }
  add() {
    const data = {};
    let url;
    data.name = this.refs.name.value.trim();
    data.id_number = this.refs.id_number.value.trim();
    data.telephone = this.refs.telephone.value.trim();
    if(this.props.match.params.id){
      data.id = this.props.match.params.id;
      url = actions.fetchUpdeteClientPosts(data);
    }else {
      url = actions.fetchAddClientPosts(data);
    }
    store.dispatch(url).then(()=>{
      if(data.errcode)
        alert('操作失败，请稍后重试')
      else
        this.props.history.push('/main/searchClient')
    });
  }
  render() {
    return (
      <div className="AddOrder">
        <div className='item'>
          <label>姓名</label>
          <input type='text' ref='name' onChange={this.onChange.bind(this,'name')} value={this.state.name}/>
        </div>
        <div className='item'>
          <label>身份证</label>
            <input type='number' ref='id_number' onChange={this.onChange.bind(this,'id_number')} value={this.state.id_number}/>
        </div>
        <div className='item'>
          <label>联系电话</label>
          <input type='number' ref='telephone' onChange={this.onChange.bind(this,'telephone')} value={this.state.telephone}/>
        </div>
        <button onClick={this.add.bind(this)}>确定</button>
      </div>
    );
  }
}

function mapStateToProps(state,props) {
  return {
    payload: state.searchClient.payload
  }
}

const Client = connect(mapStateToProps)(Main);

export default Client;
*/