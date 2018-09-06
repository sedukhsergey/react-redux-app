
const uReducer = (usersState = {}, action) => {
  switch (action.type) {
      case 'AUTH':
      // request
      // if notOk return usersState
        return usersState =  {...action.data}

      default:
        return usersState
	}; 
}

export default uReducer;
