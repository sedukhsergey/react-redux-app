import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import counterActions from '../actions/counterActions'
import userActions from '../actions/userActions'

class AutorizationPage extends React.Component {

	changeUserLogin = (e) => {
			this.props.decrementChangeLogin(e.target.value)
		}

	changeUserPassword = (e) => {
			this.props.decrementChangePassword(e.target.value)
		}

	render() {
	console.log('---',this.props.login)
	
		return (
			<div>
				<form id='autorizationForm' 
						onSubmit={this.handleClickSubmit}
						>
					<p> 
						<input type="text" 
									onChange={this.changeUserLogin}
							/> Login 
					</p>
					<p> 
						<input type="password"
									onChange={this.changeUserPassword}
								/> Password 
					</p>
						<input type="submit" value='Submit'/>
				</form>
			</div>
			);
		}
}

const mapStateToProps = store => {
	console.log('--- store', store)
	return {
		 login: store.login,
		 password: store.password
 }
}


const mapDispatchToProps = dispatch => (
	{
		decrementChangeLogin(newValue) {
			const login = userActions.loginUser(newValue);
			dispatch(login)
		},
		decrementChangePassword(newValue) {
			const password = userActions.passwordUser(newValue);
			dispatch(password)
		}
	}
)
// redux magic

export default connect(mapStateToProps, mapDispatchToProps)(AutorizationPage)