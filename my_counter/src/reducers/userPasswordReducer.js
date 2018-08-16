
	const userPasswordReducer = (state = {}, action) => {
		if ( !isNaN(action.type ) && +action.type !== 0 )
			return state = {
				password: action.type 
			}
		else return state
	}

export default userPasswordReducer;
