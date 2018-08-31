import React from 'react'
import {connect} from 'react-redux';

import counterActions from '../actions/counterActions'
import userActions from '../actions/userActions'
import Header from '../components/Header'
import Article from '../components/Article'
import Content from '../components/Content'
class App extends React.Component {
	render() {
		return (
			<div>
				<Header 
					userLogin={this.props.login}
					userPassword={this.props.password}
					dispatchAuth={this.props.dispatchAuth}
				/>
				<Content 
					counter={this.props.counter}
					changeCounterDispatch={this.props.changeCounterDispatch} />
				<Article />
			</div>
		)
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


