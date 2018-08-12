 // 2 add new reducer

 const counterReducer = (counterState = 0, action) => {
    switch (action.type) {

        case 'INCREMENT_COUNTER':
        		// console.log('INCREMENT_COUNTER action, state: ', counterState)
            return action.newCounterValue;

        case 'DECREMENT_COUNTER':
        		return --counterState;

        default:
            return counterState;
    }
};

export default counterReducer;