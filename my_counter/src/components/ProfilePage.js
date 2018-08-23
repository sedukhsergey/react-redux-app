
import React from 'react'

class ProfilePage extends React.Component {

	clearLocalStorage = () => {
		localStorage.clear()
	}

	showLocalStorage = () => {
		console.log('---',localStorage)
	}

	render() {

		let { login, password } = { ...this.props.userAuthData }

		return (

				<div>
					<h2>Profile Page:</h2>
					<h3>
						Login: { login }
					</h3>
					<h3>
					Password: { password }
					</h3>
					<p>
						<button 
							onClick={this.clearLocalStorage}
						>
							Clear localStorage
						</button>
						<button 
							onClick={this.showLocalStorage}>
							show localStorage
						</button>
					</p>
				</div>

		);

	}

}



export default ProfilePage;
