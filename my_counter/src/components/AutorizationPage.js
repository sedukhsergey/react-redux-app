import React from 'react'
import PropTypes from 'prop-types'

class AutorizationPage extends React.Component {

	static propTypes = {
		dispatchAuth: PropTypes.func
	}

	state = {
		login: null,
		password: null,
		isOpened: false
	}
		
// add propTypes

	changeUserLogin = (e) => {
		let inputValue = e.target.value
		this.setState( () => ({
			login: inputValue
		}))
	}

	changeUserPassword = (e) => {
		let inputValue = e.target.value
		this.setState(() => ({
			password: inputValue
		}))
	}

	changeLocalStorage = () => {
		let userData = 
		{
			login: this.state.login,
			password: this.state.password
		};

		let serialObj = JSON.stringify(userData)
		localStorage.setItem(this.state.login, serialObj)
	}

	userVerification = (login) => {
		let objParse = JSON.parse(localStorage.getItem(login));
		 console.log('ObjParse',!!objParse)
	}


	handleClickSubmit = (e) => {
			e.preventDefault();
			this.props.dispatchAuth({
			login: this.state.login,
			password: this.state.password 
			})
			this.changeLocalStorage()
		
	}

	render() {
		return (
			<div className="autorizationPage">
				<form id='autorizationForm' 
						onSubmit={this.handleClickSubmit}>
					<p> 
						<input type="text" 
									onChange={this.changeUserLogin}
							/> <span>Login</span>
					</p>
					<p> 
						<input type="password"
									onChange={this.changeUserPassword}
								/> <span>Password</span> 
					</p>
						<input type="submit" 
									value='Войти'
									className='btn'
									/>
				</form>
			</div>
			);
		}
}


export default AutorizationPage