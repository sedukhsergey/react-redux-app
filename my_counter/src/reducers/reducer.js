 // 2 add new reducer

 const counterReducer = (state = null, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return action.counter;
        case 'DECREMENT_COUNTER':
        		return action.counter;
        default:
            return state;
    }
};

export default counterReducer;