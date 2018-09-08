import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Header from './Header/Header'
import Whinepad from './Whinepad/Whinepad'

class Main extends Component {

	static propTypes ={
	userLogin: PropTypes.string,
	userPassword: PropTypes.string,
	dispatchAuth: PropTypes.func.isRequired,
	getKey: PropTypes.func.isRequired
	}

	render() {
		return (
			<div id='main'>
				<Header 
					userLogin={this.props.userLogin}
					userPassword={this.props.userPassword}
					dispatchAuth={this.props.dispatchAuth}
					/>
				<Whinepad 
					getKey={this.props.getKey}/>
			</div>

			)
	}
}

export default Main