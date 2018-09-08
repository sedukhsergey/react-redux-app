import React, {Component} from 'react'
import PropTypes from 'prop-types'

import ProfilePage from './ProfilePage/ProfilePage'
import AutorizationPage from './AutorizationPage/AutorizationPage'

 class Header extends Component {

	static propTypes = {
		dispatchAuth: PropTypes.func.isRequired,
		userLogin: PropTypes.string,
		userPassword: PropTypes.string
	}


	render() {
		const isUserAuth = this.props.userLogin && this.props.userPassword
		return (
			<div className='header'>
				{ 
					isUserAuth ?
					<ProfilePage 
						userLogin={this.props.userLogin}
						userPassword={this.props.userPassword}/> 
					:
					<AutorizationPage dispatchAuth={this.props.dispatchAuth}/>
				}
			</div>
		)
	}
}

export default Header



