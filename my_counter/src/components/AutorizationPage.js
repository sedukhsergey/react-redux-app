import React from 'react'
import PropTypes from 'prop-types'

class AutorizationPage extends React.Component {

	static propTypes = {
		dispatchAuth: PropTypes.func
	}

	state = {
		login: null,
		password: null
	}
		


	changeUserLogin = (e) => {
		let inputValue = e.target.value
		this.setState( () => ({
			login: inputValue,
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

	parseLocalStorage = (elem) => {
		let objParse = JSON.parse(localStorage.getItem(elem))
		return objParse
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
		console.log('---',localStorage)
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
									value='Войти'
									/>
				</form>
			</div>
			);
		}
}


export default AutorizationPage