import React from 'react'
import ReactDOM from 'react-dom'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import store from './src/Redux/Store/store'
import Login from './src/Component/Login'
import NoMatch from './src/Component/NoMatch'
import Main from './src/Router/Main'
import './src/Style/app.css'

const history = createHistory()

ReactDOM.render(
  <Provider store = {store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>        
          <Route path="/login" component={Login}/>
          <Route path="/main" component={Main}/>        
          <Redirect from="/" to="/login"/>    
          <Route component={NoMatch}/>    
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
  ,document.getElementById('app')
);