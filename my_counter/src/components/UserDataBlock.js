
import React from 'react'

class UserDataBlock extends React.Component {

	render() {
		let { login, password } = { ...this.props.userAuthData }
		return (
				<div className='userData'>
					<ul>
						<li><span>login: {login}</span></li>
					</ul>
				</div>


		);

	}

}



export default UserDataBlock;
