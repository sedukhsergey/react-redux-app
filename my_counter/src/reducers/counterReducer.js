
const CHANGE_COUNTER = 'CHANGE_COUNTER'
const counterReducer = (stateCounter = 0, action) => {
	switch (action.type) {
			case CHANGE_COUNTER:
				return stateCounter + action.data
		default:
			return stateCounter;
	}
};

export default counterReducer;