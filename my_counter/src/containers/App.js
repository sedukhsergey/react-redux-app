import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'

import counterActions from '../actions/counterActions'
import userActions from '../actions/userActions'
import Header from '../components/Header'
import Content from '../components/Content'
import FormRegistration from '../components/FormRegistration'
import Nav from '../components/Nav'
{/*				<Header 
					userLogin={this.props.login}
					userPassword={this.props.password}
					dispatchAuth={this.props.dispatchAuth}
				/>
				<Content
					changeCounterDispatch={this.props.changeCounterDispatch} />*/}

class App extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<Switch>
					<Route exact path='/' component={Header}/>
					<Route path='/registration' component={FormRegistration} />
					<Route path='/content' component={Content}/>
	    	</Switch>
	    </div>
		)
	}
}

const mapStateToProps = store => {
	return {
		 login: store.user.login,
		 password: store.user.password
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
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


