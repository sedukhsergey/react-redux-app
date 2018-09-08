import React, {Component} from 'react'

import Login from './Login/Login'
import NameSurname from './NameSurname/NameSurname'
import Email from './Email/Email'
class FormRegistration extends Component {
	render() {
		return (
			<div id="form_registration_container">
				<form id='form_registration'>
					<Login />
					<NameSurname />
					<Email />
				</form>
			</div>

			)
	}
}

export default FormRegistration