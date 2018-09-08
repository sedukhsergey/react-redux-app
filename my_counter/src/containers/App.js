import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'

import counterActions from '../actions/counterActions'
import userActions from '../actions/userActions'
import Main from '../components/Main/Main'
import Header from '../components/Main/Header/Header'
import FormRegistration from '../components/FormRegistration/FormRegistration'
import Content from '../components/Content/Content'
import Nav from '../components/Nav/Nav'

class App extends React.Component {

	getKey = (str) => {
		let key = 0;
		for (let i = 0; i < str.length; i++) {
			key += str.charCodeAt(i);
		}
		return key.toString();
	}

	render() {
		return (
			<div>
				<Nav />
				<Switch>
					<Route exact path='/' render={() => (
						<Main 
							userLogin={this.props.login}
							userPassword={this.props.password}
							dispatchAuth={this.props.dispatchAuth}
							getKey={this.getKey} />
						)}/>
					<Route path='/registration' 
								 component={FormRegistration} />
					<Route path='/content' render={() =>(
						<Content 
							changeCounterDispatch={this.props.changeCounterDispatch}/>
					)}/>
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


