import React, { Component } from 'react';
//import * as actions from '../Redux/Action/action';
//import store from '../Redux/Store/store';
//import { connect } from 'react-redux';
import '../Style/home.css';

class Home extends Component {
   getItem(){
    fetch('http://interface.market.qiyestore.com/interface/category/list', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Hubot',
        login: 'hubot',
      })
    })
    .then(
      res => {return res.json()}
    )
    .then(data => {
        store.dispatch(actions.addItem(data));
    })
    .catch(error => {
      console.log(error);
    })
  }
  render() {
    //const { value,text,onIncreaseClick,dispatch } = this.props;
    return (
      <div className="Home bgBox">
          <header>
            北京开拓未来有限公司
            <img src="#" />
            普通用户
          </header>
          <br/>
          <div className="top">
            <div className="left">
              <div className="box">
                 <div className="title">客户端情况</div>
                 <div className="comment"><img src="#"/></div>
              </div>
              <br />
              <div className="box">
                 <div className="title">创建应用</div>
                 <div className="comment"><button onClick={this.getItem.bind(this)}>创建应用</button></div>
              </div>
            </div>
            <div className="right box">
              <div className="title">消息</div>
              <div className="comment">
                <div className="message">您有20条未读消息</div>
                <ul>
                  <li>
                     <div className="textLeft">【重要通知】应广告法要求请对应用描述进行自查！</div>
                     <div className="textRight">2016-05-03</div>
                  </li>
                  <li>
                    <div className="textLeft">【重要通知】应广告法要求请对应用描述进行自查！</div>
                    <div className="textRight">2016-05-03</div>
                  </li>
                  <li>
                    <div className="textLeft">【重要通知】应广告法要求请对应用描述进行自查！</div>
                    <div className="textRight">2016-05-03</div>
                  </li>
                  <li><a href="#">更多>></a></li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="box">
             <div className="title">联系我们</div>
             <div className="comment list">
                <div className="list text">
                  <img src="#" />
                  <div>
                    客服邮箱
                    <br/>
                    service@qiyestore.com
                    <p>邮件发送格式邮件发送格式邮件发送格式邮件发送格式邮件发送格式邮件发送格式邮件发送格式邮件发送格式邮件发送格式邮件发送格式</p>
                  </div>
                </div>
                <div className="list text">
                  <img src="#" />
                  <div>
                    客服邮箱
                    <br/>
                    service@qiyestore.com
                    <p>邮件发送格式邮件发送格式邮件发送格式邮件发送格式邮件发送格式邮件发送格式邮件发送格式邮件发送格式邮件发送格式邮件发送格式</p>
                  </div>
                </div>
                <div className="list text">
                  <img src="#" />
                  <div>
                    客服邮箱
                    <br/>
                    service@qiyestore.com
                    <p>邮件发送格式邮件发送格式邮件发送格式邮件发送格式邮件发送格式邮件发送格式邮件发送格式邮件发送格式邮件发送格式邮件发送格式</p>
                  </div>
                </div>
             </div>
          </div>
      </div>
    );
  }
}

/*function mapStateToProps(state) {
  console.log(state);
  return {
    value: state.reducers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(action.action)
  }
}

// 限制 props 里参数的类型,不能用来限制input输入的值
Home.PropTypes = {
    value:React.PropTypes.fun
}

export default connect(
  mapStateToProps,    //真实数据如何转化为UI组件的参数(props),rudex规定所有数据都在props上获取
  mapDispatchToProps  //将所有的定义的事件方法(函数)绑定到props上，在props上获取事件函数
)(Home);
*/
export default Home;
