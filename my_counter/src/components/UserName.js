import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import counterActions from '../actions/counterActions'
import AutorizationPage from '../components/AutorizationPage'
import Counter from '../components/Counter.js'

class UserName extends React.Component {


		render() {
			console.log('--- this.props',this.props)
			return (

					<div>
						<p>
							 { 
								this.props.users.length 
									? 
										this.props.users[0].name 
									: 
										'petyi net'
								}
						</p>
					</div>
			);
		}
}

const mapStateToProps = store => {
	console.log('--- store', store)
	return {
		 counter: store.counter,
		 users: store.users,
 }
}

export default connect(mapStateToProps )(UserName);