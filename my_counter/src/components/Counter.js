import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {

	static propTypes = {
		counter: PropTypes.number.isRequired,
		changeCounterDispatch: PropTypes.func.isRequired
	}

	render() {
		return (
				<div className='counter'>
					<h2>
						Counter value increment: 
						<span>{this.props.counter}</span>
					</h2>
					<button 
						onClick={ ()=> this.props.changeCounterDispatch(1) } 
						className='btn'>+1
					</button>
					<button 
						onClick={ ()=> this.props.changeCounterDispatch(-1) } 
						className='btn'>-1
					</button>
				</div>
		);
	}
}

export default Counter;


