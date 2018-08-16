// 1 add new action

const incrementCounter = (newCounterValue)=> {
	return {
	    type: 'INCREMENT_COUNTER',
	    newCounterValue
	};
}


const decrementCounter = (newValue) => {

	return {
	    type: 'DECREMENT_COUNTER'
	}
}



export default {incrementCounter, decrementCounter};