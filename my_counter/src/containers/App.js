import React from 'react'

import PropTypes from 'prop-types'

import {connect} from 'react-redux';

import counterActions from '../actions/counterActions'

import AutorizationPage from '../components/AutorizationPage'

import Counter from '../components/Counter'

import ProfilePage from '../components/ProfilePage'


class App extends React.Component {

	render() {

		const isUserAuth = this.props.login && this.props.password

		const userAuthData = {
			login: this.props.login,
			password: this.props.password
		}

		const counter = this.props.counter

		return (

				<div>
					<Counter counter = { counter } />
					{ isUserAuth ?
						<ProfilePage userAuthData = { userAuthData } /> 
						: 
						<AutorizationPage />
					}
				</div>

		);

	}

}

const mapStateToProps = store => {
	return {
		 counter: store.counter,
		 login: store.user.login,
		 password: store.user.password
 }
}

const mapDispatchToProps = dispatch => ({
	incrementDispatch(newCounterValue){
		const action = counterActions.incrementCounter(newCounterValue);
		dispatch(action);
	},

	decrementDispatch(newCounterValue) {
		const action = counterActions.decrementCounter(newCounterValue);
		dispatch(action);
	},

})

export default connect(mapStateToProps, mapDispatchToProps)(App);


