import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';             //改造dispatch方法，可以返回函数。之前只能接受对象作为参数
import { createLogger } from 'redux-logger';     //日志打印
import * as reducers from '../Reducer/reducers';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const logger = createLogger();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers(reducers,{router:routerReducer}),   //合并各个子Reducer函数
  applyMiddleware(middleware,thunk,logger)      // 将所有中间件(参数)组成一个数组，依次执行。次序有讲究
)

export default store;           //export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句
