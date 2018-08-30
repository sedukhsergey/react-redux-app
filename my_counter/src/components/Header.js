import React from 'react'
import Counter from '../components/Counter'
import ProfilePage from '../components/ProfilePage'
import AutorizationPage from '../components/AutorizationPage'


class Header extends React.Component {
	// add propTypes
	render() {
		console.log('Headerd',this.props)
		const isUserAuth = this.props.userAuthData.login && this.props.userAuthData.password
		return (
				<div className='header'>
					{ isUserAuth ?
						<ProfilePage userAuthData={this.props.userAuthData} /> 
						:
						<AutorizationPage dispatchAuth={this.props.dispatchAuth}/>
					}
					<Counter counter={this.props.counter}
						incrementDispatch={this.props.incrementDispatch}
						dicrementDispatch={this.props.dicrementDispatch}/>
				</div>

		);

	}
}

export default Header;


