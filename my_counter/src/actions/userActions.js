
const AUTH = 'AUTH'
const auth = (data) => {
		return {
			type: AUTH,
			data
		}
}

export default {
	auth
 };