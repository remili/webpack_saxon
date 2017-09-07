import Immutable from 'immutable';
//数据创建后不会被改变,同样的State，必定得到同样的 View,reducer不能改变state


//信息初始化
const initialState = ({
  isFetching: false,
  payload:[]
});

//添加菜单栏
export const getItem = (state=initialState,action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return Object.assign({},state,{
        payload:[]
      });
    default:
      return state;
  }
}

//登录
export const login = (state={},action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return Immutable.Map(state).set('isFetching',true).toJS();
    case 'LOGIN_SUCCESS':
      return Immutable.Map({payload:action.payload,isFetching:false}).toJS();
    case 'LOGIN_ERROR':
      return Immutable.Map(state).set('isFetching',false).toJS();
    case 'LOGIN_OUT':
      localStorage.clear();
      return null
    default:
      return state;
  }
}

//添加客户
export const addClient = (state={},action) => {
  switch (action.type) {
    case 'ADD_CLIENT_SUCCESS':
      return Immutable.Map({payload:action.payload,isFetching:false}).toJS();
    case 'ADD_CLIENT_ERROR':
      return Immutable.Map(state).set('isFetching',false).toJS();
    default:
      return state;
  }
}

//查询客户
export const searchClient = (state=initialState,action) => {
  switch (action.type) {
    case 'SEARCH_CLIENT_SUCCESS':
      return Immutable.Map({payload:action.payload,isFetching:false}).toJS();
    case 'SEARCH_CLIENT_ERROR':
      return Immutable.Map(state).set('isFetching',false).toJS();
    default:
      return initialState;
  }
}

//修改客户
export const updeteClient = (state={},action) => {
  switch (action.type) {
    case 'UPDETE_CLIENT_SUCCESS':
      return Immutable.Map({payload:action.payload,isFetching:false}).toJS();
    case 'UPDETE_CLIENT_ERROR':
      return Immutable.Map(state).set('isFetching',false).toJS();
    default:
      return state;
  }
}

//添加订单
export const addOrder = (state={},action) => {
  switch (action.type) {
    case 'ADD_ORDER_SUCCESS':
      return Immutable.Map({payload:action.payload,isFetching:false}).toJS();
    case 'ADD_ORDER_ERROR':
      return Immutable.Map(state).set('isFetching',false).toJS();
    default:
      return state;
  }
}

//查询定单
export const searchOrder = (state=initialState,action) => {
  switch (action.type) {
    case 'SEARCH_ORDER_SUCCESS':
      return Immutable.Map({payload:action.payload,isFetching:false}).toJS();
    case 'SEARCH_ORDER_ERROR':
      return Immutable.Map(state).set('isFetching',false).toJS();
    default:
      return initialState;
  }
}

//修改定单
export const updeteOrder = (state={},action) => {
  switch (action.type) {
    case 'UPDETE_ORDER_SUCCESS':
      return Immutable.Map({payload:action.payload,isFetching:false}).toJS();
    case 'UPDETE_ORDER_ERROR':
      return Immutable.Map(state).set('isFetching',false).toJS();
    default:
      return state;
  }
}
