const titleUserAuthTrue = (newValue) => {
	return {
		type: 'AUTH_TRUE',
		newValue
	}
}

const titleUserAuthFalse = (newValue) => {
	return {
		type: 'AUTH_FALSE',
		newValue
	}
}