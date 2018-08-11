import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import actions from '../actions/counterActions'


class App extends React.Component {

		static contextTypes = {
				store: PropTypes.object
		};

		decrementHandler = () => {
			actions.decrementCounter(this.props.counter)
		}

		incrementHandler = () => {
			actions.incrementCounter(this.props.counter)
		}

		render() {
			return (
					<div>
						<h2>
							Counter value increment: 
							{this.props.counter}
						</h2>
						<button 
							onClick={ this.incrementHandler }>+1
						</button>
						<h2>
							Counter value decrement:
							{this.props.counter}
						</h2>
						<button 
							onClick={this.decrementHandler}>-1
						</button>
					</div>
			);
		}
}

const mapStateToProps = state => ({
		 counter: state.counter
 })

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App);