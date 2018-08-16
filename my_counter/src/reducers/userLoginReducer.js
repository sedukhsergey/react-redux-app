// reducer - produces new state


	const userLoginReducer = (state = {}, action) => {
		if ( isNaN(action.type) )
			return state[0] = {
				login: action.type 
			}
		else return state
	}

export default userLoginReducer;
