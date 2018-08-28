import React from 'react'
import {connect} from 'react-redux';
import counterActions from '../actions/counterActions'
import userActions from '../actions/userActions'
import AutorizationPage from '../components/AutorizationPage'
import Counter from '../components/Counter'
import ProfilePage from '../components/ProfilePage'


class App extends React.Component {

	get someData() { 
		return {
			login: this.props.login,
			password: this.props.password
		}
	}
// make getters for isUserAuth, userAuthData
	render() {

	const isUserAuth = this.props.login && this.props.password

	const userAuthData = {
		login: this.props.login,
		password: this.props.password
	}
	

	// throw dispatch functions through props also
	return (
			<div>
				<Counter counter={this.props.counter}
					incrementDispatch={this.props.incrementDispatch}
					dicrementDispatch={this.props.dicrementDispatch}/>
				{ isUserAuth ?
					<ProfilePage userAuthData = {userAuthData} /> 
					:
					<AutorizationPage dispatchAuth={this.props.dispatchAuth}/>
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


