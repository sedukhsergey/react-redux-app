const IS_GUEST_ENTER = 'IS_GUEST_ENTER'
const changeAuth = (flag) => {
	return {
		type: IS_GUEST_ENTER,
		flag
	}
}

export default { changeAuth }