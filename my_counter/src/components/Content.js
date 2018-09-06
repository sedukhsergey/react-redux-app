import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, Switch, Link} from 'react-router-dom'

import Counter from './Counter'
import Timer from './Timer'
/*<Counter
	changeCounterDispatch={this.props.changeCounterDispatch} />*/
class Content extends Component {
	static propTypes = {
		changeCounterDispatch: PropTypes.func.isRequired,
	}
	render() {
		return (
			<div className="content_container">
				<ul>
					<li>
						<Link className='nav_link' to='/content/timer'>Timer</Link>
					</li>
					<li>
						<Link className='nav_link' to='/content/counter'>Counter</Link>
					</li>
					
				</ul>
				<Switch>
					<Route exact path='/content/timer' component={Timer} />
					<Route path='/content/counter' component={Counter} />
				</Switch>
			</div>
			)
	}
}

export default Content