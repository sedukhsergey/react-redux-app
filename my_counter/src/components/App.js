import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import counterActions from '../actions/counterActions'
import AutorizationPage from '../components/AutorizationPage'

class App extends React.Component {

		incrementHandler = () => {
			this.props.incrementDispatch(this.props.counter+1);
		}

		decrementHandler = () => {
			this.props.decrementDispatch(this.props.counter-1);
		}

		render() {
			console.log('--- this.props',this.props)
			return (
					<div>
						<h2>
							Counter value increment: 
							{this.props.counter}
						</h2>
						<button 
							onClick={ this.incrementHandler }>+1
						</button>
						<button 
							onClick={ this.decrementHandler }>-1
						</button>
						<p>
							 { this.props.users.length ? 
								 	this.props.users[0].name
								 	:
								 	'petyi net'
							 	}
						</p>
						<AutorizationPage />
					</div>
			);
		}
}
// add some state in props of component(from global state in local state)

const mapStateToProps = store => {
	console.log('--- store', store)
	return {
		 counter: store.counter,
		 users: store.users,
		 login: store.login
 }
}

// add some actions in props of component
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
// redux magic
export default connect(mapStateToProps, mapDispatchToProps)(App);