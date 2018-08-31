import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter'

class Content extends Component {
	static propTypes = {
		counter: PropTypes.number.isRequired,
		changeCounterDispatch: PropTypes.func.isRequired,
	}
	render() {
		return (
			<div className="content_container">
				<Counter
					counter={this.props.counter}
					changeCounterDispatch={this.props.changeCounterDispatch} />
			</div>
			)
	}
}

export default Content