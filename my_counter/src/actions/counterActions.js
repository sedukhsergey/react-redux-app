const changeCounter = (newValue) => {
	return {
		type: 'CHANGE_COUNTER',
		data: newValue
	}
}



export default {changeCounter};