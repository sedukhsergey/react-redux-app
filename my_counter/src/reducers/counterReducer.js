
const counterReducer = (stateCounter = 0, action) => {
	switch (action.type) {
			case 'CHANGE_COUNTER':
				return stateCounter + action.data
			return 
		default:
		return stateCounter;
	}
};

export default counterReducer;