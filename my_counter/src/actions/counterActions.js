
const incrementCounter = (newCounterValue)=> {
	return {
		type: 'INCREMENT_COUNTER',
		newCounterValue
	};
}


const dicrementCounter = (newValue) => {

	return {
		type: 'DICREMENT_COUNTER'
	}
}



export default {incrementCounter, dicrementCounter};