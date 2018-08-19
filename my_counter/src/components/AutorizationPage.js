import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import counterActions from '../actions/counterActions'
import userActions from '../actions/userActions'

class AutorizationPage extends React.Component {
	
	// add prop types
	state = {
		login: '',
		password: ''
	}

	changeUserLogin = (e) => {
		this.setState({
			login: e.target.value
		})
	}

	changeUserPassword = (e) => {
		this.setState({
			password: e.target.value
		})
	}

	handleClickSubmit = (e) => {
		e.preventDefault();
		this.props.dispatchAuth({
			login: this.state.login,
			password: this.state.password 
		})
	}

	render() {
		return (
			<div>
				<form id='autorizationForm' 
						onSubmit={this.handleClickSubmit}>
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
						<input type="submit" 
									value='Submit'
									/>
				</form>
			</div>
			);
		}
}

const mapStateToProps = store => {
	return {
 }
}


const mapDispatchToProps = dispatch => (
	{
		dispatchAuth(user) {
			const userAction = userActions.auth(user);
			dispatch(userAction);
		}
	}
)

export default connect(mapStateToProps, mapDispatchToProps)(AutorizationPage)