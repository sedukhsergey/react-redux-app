import {createStore, combineReducers} from 'redux';
import counterReducer from '../reducers/reducer'
import userReducer from '../reducers/userReducer'
import userLoginReducer from '../reducers/userLoginReducer'
import userPasswordReducer from '../reducers/userPasswordReducer'

const store = createStore(
		combineReducers(
			{
				counter: counterReducer,
				users: userReducer,
				login: userLoginReducer,
				password: userPasswordReducer
					}
		)
);


// store.subscribe( () => console.log( '---',store.getState() ) )

export default store;