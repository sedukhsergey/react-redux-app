import React from 'react'
import UserDataBlock from '../components/UserDataBlock'

class ProfilePage extends React.Component {
	state = {
		isOpened: true,
	}

// add propTypes
	hideBlock = (e) => {
		this.setState(() => ({
			isOpened: !this.state.isOpened
		}))
	}

	render() {
		let { login, password } = { ...this.props.userAuthData }
		let isOpened = this.state.isOpened
		return (
				<div>
					{
						isOpened ?
						<div className='modalBlock'>
							<span className='exit'
										onClick={this.hideBlock}>x</span>
							<h1>Hello! {login}</h1>
							<p>
								<button className='accept'
											onClick={this.hideBlock}><span>Accept</span></button>
								<button className='reject'
											onClick={this.hideBlock}><span>Reject</span></button>
							</p>
						</div>
						:
						<UserDataBlock userAuthData={this.props.userAuthData}/>
					}
				</div>
		);

	}

}



export default ProfilePage;
