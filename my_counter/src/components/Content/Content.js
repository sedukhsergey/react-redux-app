import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, Switch, Link} from 'react-router-dom'

import Counter from './Counter'
import Timer from './Timer'
import Article from './Article'

class Content extends Component {
	static propTypes = {
		changeCounterDispatch: PropTypes.func.isRequired,
		dispatchText: PropTypes.func.isRequired
	}

	state = {
		num: 0,
		text:''
	}

	handleClick = () => {
		this.setState(() => ({
			num: this.state.num + 1,
			text: this.state.text + 'text'
		}))
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
					<li>
						<Link className='nav_link' to='/content/article'>Article</Link>
					</li>
					
				</ul>
				<Switch>
					<Route exact path='/content/timer' component={Timer} />
					<Route path='/content/counter' render={() => (
						<Counter changeCounterDispatch={this.props.changeCounterDispatch}/>
						)} />
					<Route path='/content/article' render={() => (
						<Article 
							number={this.state.num}
							text={this.state.text}
							handleClick={this.handleClick}
							dispatchText={this.props.dispatchText}
							/>
						)} />
				</Switch>
				
			</div>
			)
	}
}

export default Content