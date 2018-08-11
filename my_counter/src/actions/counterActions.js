import store from '../stores/store';

// 1 add new action

const incrementCounter = (newValue)=> (
	store.dispatch({
	    type: 'INCREMENT_COUNTER',
	    counter: ++newValue
	}
	)
)

const decrementCounter = (newValue) => {
	store.dispatch({
		type: 'DECREMENT_COUNTER',
		counter: --newValue
	}
	)
}

export default {incrementCounter, decrementCounter};