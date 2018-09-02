import {createStore, combineReducers} from 'redux';
import counterReducer from '../reducers/counterReducer'
import uReducer from '../reducers/uReducer'
const store = createStore(
	combineReducers(
		{
			counter: counterReducer,
			user: uReducer
		}
	)
);

store.subscribe(() => {
	console.log(store.getState())
})

export default store;