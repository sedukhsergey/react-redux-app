import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

// import { composeWidthDevTools } from 'redux-devtools-extension'

import counterReducer from '../reducers/counterReducer'
import checkUserAuthReducer from '../reducers/checkUserAuthReducer'
import userReducer from '../reducers/userReducer'
import textReducer from '../reducers/textReducer'
import changeAuthGuestReducer from '../reducers/changeAuthGuestReducer'

const store = createStore(
	combineReducers(
		{
			counter: counterReducer,
			user: userReducer,
			text: textReducer,
			isUserAuth: checkUserAuthReducer,
			isGuestAuth: changeAuthGuestReducer
		}
	),
	applyMiddleware(thunk)
);

store.subscribe(() =>
	console.log('myStore',store.getState()))

export default store;