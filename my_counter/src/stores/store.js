import counterReducer from '../reducers/reducer'
import {createStore, combineReducers} from 'redux';


const store = createStore(
    combineReducers(
    	{ counter: counterReducer },
    	// {users: usersReducer}
    	)
);


// store.subscribe( () => console.log( '---',store.getState() ) )

export default store;