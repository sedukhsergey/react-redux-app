import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import counterActions from '../actions/counterActions'
import userActions from '../actions/userActions'
import textActions from '../actions/textActions'
import checkAuthAction from '../actions/checkAuthAction'
import changeAuthGuestAction from '../actions/changeAuthGuestAction.js'


import Main from '../components/Main/Main'
import FormRegistration from '../components/FormRegistration/FormRegistration'
import Content from '../components/Content/Content'
import Nav from '../components/Nav/Nav'

class App extends React.Component {

	render() {
		return (
			<div>
				<Nav />
				<Switch>
					<Route exact path='/' render={ () => (
						<Main 
							userLogin={ this.props.login }
							userPassword={ this.props.password }
							isUserAuth={ this.props.isUserAuth }
							dispatchAuth={ this.props.dispatchAuth }
							isGuestAuth={ this.props.isGuestAuth }
							dispatchChangeAuthGuest={ this.props.dispatchChangeAuthGuest }
							dispatchCheckAuth={ this.props.dispatchCheckAuth } />
						)}/>
					<Route path='/registration' 
								 component={ FormRegistration } />
					<Route path='/content' render={() =>(
						<Content 
							changeCounterDispatch={ this.props.changeCounterDispatch }
							dispatchText={ this.props.dispatchText }
							/>
					)} />
	    	</Switch>
	    </div>
		)
	}
}

const mapStateToProps = store => {
	return {
		login: store.user.login,
		password: store.user.password,
		isUserAuth: store.isUserAuth,
		isGuestAuth: store.isGuestAuth
	}
}

const mapDispatchToProps = dispatch => ({
	changeCounterDispatch(newCounterValue) {
		const action = counterActions.changeCounter(newCounterValue);
		dispatch(action)
	},
	dispatchAuth(user) {
		const userAction = userActions.auth(user);
		dispatch(userAction);
	},
	dispatchText(text) {
		const textAction = textActions.changeText(text);
		dispatch(textAction)
	},
	dispatchCheckAuth(flag) {
	const flagUserAuth = checkAuthAction.checkAuth(flag)
	dispatch(flagUserAuth)
	},
	dispatchChangeAuthGuest(flag) {
		const flagGuestAuth = changeAuthGuestAction.changeAuth(flag)
		dispatch(flagGuestAuth)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


