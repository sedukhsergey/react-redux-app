
const counterReducer = (stateCounter = 0, action) => {
	switch (action.type) {
		case 'INCREMENT_COUNTER':
			return action.newCounterValue;

		case 'DICREMENT_COUNTER':
			return --stateCounter;

		default:
		return stateCounter;
	}
};

export default counterReducer;