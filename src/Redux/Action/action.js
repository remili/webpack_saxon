import {Config} from '../../Config/Config';

export const action = {
  type: 'ADD',
  //payload: <bool | number | string | object>, //action的负载，可以是数据或 error 对象如上的item就是数据
  //error: <bool>,                  // 指明该action是否是一个以 error 为负载的action
  //meta: <string>               // 解释该action含义的信息
}

//登录
const loginStart = () => {
  return {
    type: 'LOGIN_START'
  }
}

const loginSuccess = payload => {
  return {
    type: 'LOGIN_SUCCESS',
    payload
  }
}

const loginError = payload => {
  return {
    type: 'LOGIN_ERROR',
    payload
  }
}

//发送登录fetch请求
export const fetchLoginPosts = data => {
  return dispatch => {
    //通知开始登录
    return Config.fetch.get(
      'http://127.0.0.1:3000/api/login?name='+data.username+'&password='+data.password,
      res => {
        if(!res.errcode)
          dispatch(loginSuccess(res))
        else
          dispatch(loginError(res.message))
      },
      err => {dispatch(loginError(err.message))}
    )
  }
}

//添加客户
const addClientStart = () => {
  return {
    type: 'ADD_CLIENT_START'
  }
}

const addClientSuccess = payload => {
  return {
    type: 'ADD_CLIENT_SUCCESS',
    payload
  }
}

const addClientError = payload => {
  return {
    type: 'ADD_CLIENT_ERROR',
    payload
  }
}

//发送添加客户fetch请求
export const fetchAddClientPosts = (data) => {
  return dispatch => {
    dispatch(addClientStart());
    return Config.fetch.post('http://127.0.0.1:3000/api/clients',
    data,
    res => {
      if(!res.errcode)
        dispatch(addClientSuccess(res))
      else
        dispatch(addClientError(res.message))
    },
    err => {dispatch(addClientError(err.message))})
  }
}


//修改客户资料
const updeteClientStart = () => {
  return {
    type: 'UPDETE_CLIENT_START'
  }
}

const updeteClientSuccess = payload => {
  return {
    type: 'UPDETE_CLIENT_SUCCESS',
    payload
  }
}

const updeteClientError = payload => {
  return {
    type: 'UPDETE_CLIENT_ERROR',
    payload
  }
}

//发送修改客户fetch请求
export const fetchUpdeteClientPosts = (data) => {
  return dispatch => {
    dispatch(updeteClientStart());
    return Config.fetch.put(`http://127.0.0.1:3000/api/clients/${data.id}`,data,res => {
      if(!res.errcode)
        dispatch(updeteClientSuccess(res))
      else
        dispatch(updeteClientError(res.message))
    },err => {dispatch(updeteClientError(err.message))})
  }
}

//查询客户
const searchClientStart = () => {
  return {
    type: 'SEARCH_CLIENT_START'
  }
}

const searchClientSuccess = payload => {
  return {
    type: 'SEARCH_CLIENT_SUCCESS',
    payload
  }
}

const searchClientError = payload => {
  return {
    type: 'SEARCH_CLIENT_ERROR',
    payload
  }
}

//发送查询客户fetch请求
export const fetchSearchClientPosts = (data) => {
  return dispatch => {
    dispatch(searchClientStart());
    return Config.fetch.get('http://127.0.0.1:3000/api/clients',res => {
      if(!res.errcode)
        dispatch(searchClientSuccess(res))
      else
        dispatch(searchClientError(res.message))
    },err => {dispatch(searchClientError(err.message))})
  }
}

//添加订单
const addOrderStart = () => {
  return {
    type: 'ADD_ORDER_START'
  }
}

const addOrderSuccess = payload => {
  return {
    type: 'ADD_ORDER_SUCCESS',
    payload
  }
}

const addOrderError = payload => {
  return {
    type: 'ADD_ORDER_ERROR',
    payload
  }
}

//发送添加订单fetch请求
export const fetchAddOrderPosts = (data) => {
  return dispatch => {
    dispatch(addOrderStart());
    return Config.fetch.post('/api/orders',data,res => {
      if(!res.errcode)
        dispatch(addOrderSuccess(res))
      else
        dispatch(addOrderError(res.message))
    },err => {dispatch(addOrderError(err.message))})
  }
}

//查询订单
const searchOrderStart = () => {
  return {
    type: 'SEARCH_ORDER_START'
  }
}

const searchOrderSuccess = payload => {
  return {
    type: 'SEARCH_ORDER_SUCCESS',
    payload
  }
}

const searchOrderError = payload => {
  return {
    type: 'SEARCH_ORDER_ERROR',
    payload
  }
}

//发送查询订单fetch请求
export const fetchSearchOrderPosts = (data) => {
  return dispatch => {
    dispatch(searchOrderStart());
    return Config.fetch.get('/api/orders',res => {
      if(!res.errcode)
        dispatch(searchOrderSuccess(res))
      else
        dispatch(searchOrderError(res.message))
    },err => {dispatch(searchOrderError(err.message))})
  }
}
