const IS_USER_LOGIN = 'IS_USER_LOGIN'
const checkAuth = (flag) => {
	return {
		type: 'IS_USER_LOGIN',
		flag
	}
}

export default { checkAuth }