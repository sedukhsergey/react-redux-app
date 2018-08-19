
import React from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux';


class ProfilePage extends React.Component {

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
				</div>

		);

	}

}

export default ProfilePage;