 // 2 add new reducer

const initState = 0;
// rename in counterReducer

// this function returns new state
 const counterReducer = (stateCounter = initState, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
        		// console.log('INCREMENT_COUNTER action, state: ', stateCounter)
            return action.newCounterValue;

        case 'DECREMENT_COUNTER':
        		return --stateCounter;

        default:
            return stateCounter;
    }
};

export default counterReducer;