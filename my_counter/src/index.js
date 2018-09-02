import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './stores/store'
import {BrowserRouter, Route} from 'react-router-dom'

import App from './containers/App'

render(
  <Provider store={store}>
    <BrowserRouter>
    <div>
			<Route exact path='/' component={App} />
			<Route path='/two/:theme' component={ ()=> <p>123</p> } />
    </div>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root') 
);
