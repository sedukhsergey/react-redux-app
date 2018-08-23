const titleReducer = (stateTitle = '', action) => {
	switch(action.type) {
		case 'AUTH_TRUE':
			return {...stateTitle, ...action.newValue}
	}
}