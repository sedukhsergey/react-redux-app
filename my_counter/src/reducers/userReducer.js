// reducer - produces new state
const initState = [{name: 'petya'}];

const userReducer = (usersState = initState, action) => {
  switch (action.type) {
      case '...':
    		// console.log('usersState, state: ', usersState, action)
        return [...usersState, action.user];

      default:
        return usersState
	};
}

export default userReducer;
