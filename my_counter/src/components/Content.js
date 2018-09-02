import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter'

class Content extends Component {
	static propTypes = {
		changeCounterDispatch: PropTypes.func.isRequired,
	}
	render() {
		return (
			<div className="content_container">
				<Counter
					changeCounterDispatch={this.props.changeCounterDispatch} />
			</div>
			)
	}
}

export default Content