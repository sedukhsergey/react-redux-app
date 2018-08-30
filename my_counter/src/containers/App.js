import React from 'react'
import {connect} from 'react-redux';
import counterActions from '../actions/counterActions'
import userActions from '../actions/userActions'
import Header from '../components/Header'
import Article from '../components/Article'

// Create modal for all display
// refact your code(dispatch, console.log, fix variable, )
// create router for your components
// fix you timer (clear store)
class App extends React.Component {
	render() {

	const userAuthData = {
		login: this.props.login,
		password: this.props.password
	}

	return (
			<div>
				<Header counter={this.props.counter}
						incrementDispatch={this.props.incrementDispatch}
						dicrementDispatch={this.props.dicrementDispatch}
						userAuthData = {userAuthData}
						dispatchAuth={this.props.dispatchAuth}
				/>
				<Article />
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
	dicrementDispatch(newCounterValue){
		const action = counterActions.dicrementCounter(newCounterValue);
		dispatch(action);
		},
	dispatchAuth(user) {
		const userAction = userActions.auth(user);
		dispatch(userAction);
	}

})

export default connect(mapStateToProps, mapDispatchToProps)(App);


