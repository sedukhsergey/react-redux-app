import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import counterActions from '../actions/counterActions'


class Counter extends React.Component {

		incrementHandler = () => {
			this.props.incrementDispatch(this.props.counter+1);
	}

	decrementHandler = () => {
		this.props.decrementDispatch(this.props.counter-1);
	}

		render() {
			console.log('---',this.props)
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
					</div>
			);
		}
}

const mapStateToProps = store => {
	return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);