import counterReducer from '../reducers/reducer'
import {createStore, combineReducers} from 'redux';


let counter = 10;

const store = createStore(
    combineReducers({counter: counterReducer}),
    {counter}
);

	store.subscribe( () => console.log( '---',store.getState() )
	)

export default store;