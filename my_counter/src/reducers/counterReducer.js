
const counterReducer = (stateCounter = 0, action) => {
	switch (action.type) {
		case 'INCREMENT_COUNTER':
			// currentCounter = 2
			//
			return action.newCounterValue;

		case 'DICREMENT_COUNTER':
			return --stateCounter;

			case 'CHANGE_COUNTER':
			// currentCounter = 2
			// action.data = 1 || -1
			// 
			return 
		default:
		return stateCounter;
	}
};

export default counterReducer;