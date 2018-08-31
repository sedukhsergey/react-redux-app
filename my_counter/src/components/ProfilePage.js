import React, {Component} from 'react'
import PropTypes from 'prop-types'

import UserDataBlock from '../components/UserDataBlock'
import ModalBlock from '../components/ModalBlock'

class ProfilePage extends Component {

	static propTypes = {
		userLogin: PropTypes.string.isRequired,
		userPassword: PropTypes.string.isRequired
	}

	state = {
		isModalBlockOpened: true,
		isLoginSkip: false,
	}

	acceptLogin = () => {
		this.setState(() => ({
			isModalBlockOpened: !this.state.isModalBlockOpened,
		}))
	}

	skipLogin = () => {
		this.setState(() => ({
			isModalBlockOpened: !this.state.isModalBlockOpened,
			isLoginSkip: !this.state.isLoginSkip
		}))
	}

	renderModalBlock() {
		if(!this.state.isModalBlockOpened) return null;
		return (
				<ModalBlock 
					acceptLogin={this.acceptLogin}
					skipLogin={this.skipLogin}
					userLogin={this.props.userLogin} />
				)
		}

	renderUserDataBlock() {
		if ( this.state.isModalBlockOpened ) 
			return null
			else if ( this.state.isLoginSkip ) 
				return	<span className='userData'>
									Welcome guest
								</span>
				else
					return <UserDataBlock userLogin={this.props.userLogin} />
	}

	render() {
		return (
			<div className='profile_page'>
				{ this.renderModalBlock() }
				{ this.renderUserDataBlock() }
			</div>
		);
	}
}

export default ProfilePage;
