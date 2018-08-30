import React, {Component} from 'react'
import PropTypes from 'prop-types'


class Counter extends Component {
	
	static propTypes = {
		counter: PropTypes.number,
		incrementDispatch: PropTypes.func,
		dicrementDispatch: PropTypes.func
	}

	incrementHandler = () => {
		this.props.incrementDispatch(this.props.counter+1);
	}

	decrementHandler = () => {
		this.props.dicrementDispatch(this.props.counter-1);
	}

	render() {

		return (
				<div className='counter'>
					<h2>
						Counter value increment: 
						{this.props.counter}
					</h2>
					<button 
						onClick={ this.incrementHandler } 
						className='btn'>+1
					</button>
					<button 
						onClick={ this.decrementHandler } 
						className='btn'>-1
					</button>
				</div>
		);
	}
}
// make one increment function instead of two

	// Counter.propTypes = {
	// 	counter: PropTypes.number
	// }

export default Counter;


