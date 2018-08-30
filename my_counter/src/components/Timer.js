import React from 'react'


class Timer extends React.Component {

	state = {
		value: 0,
		INTERVAL: 100
	}
	
	increment = () => {
		this.setState(() => ({
			value: this.state.value + 1
		}))
	}

	startTimer = () => {
		this.timerID = setInterval(this.increment, 1000/this.state.INTERVAL)
	}

	stopTimer = () => {
		clearInterval(this.timerID)
		// clear timer
		// ? clear state
	}

	render() {
		const value = this.state.value
		return (
				<div className='timer'>
				<p><h3>Timer</h3></p>
				<p>
					<span>{Math.round(value/this.state.INTERVAL/60/60)}:</span>
					<span>{Math.round(value/this.state.INTERVAL/60)}:</span>
					<span>{Math.round(value/this.state.INTERVAL)}.</span>
					<span>{value % this.state.INTERVAL}</span>
				</p>
				<button 
					onClick={this.startTimer}
					className='btn'>
						Start timer
				</button>
				<button 
					onClick={this.stopTimer}
					className='btn'>
						Stop timer
				</button>
				</div>
		);
	}
}

export default Timer;


