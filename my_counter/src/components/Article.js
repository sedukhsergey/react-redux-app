import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Article extends Component {
	static propTypes = {
		number: PropTypes.number.isRequired,
		handleClick: PropTypes.func.isRequired,
	}

state = {
	text: '',
}

_textChange = (ev) => {
	let input = ev.target.value
	this.setState(() => ({
		text:input
	}))
}
	render() {
		return (
				<div className='article'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit autem dolorem expedita aut temporibus iusto blanditiis, suscipit inventore doloribus, placeat, at adipisci. Adipisci molestiae, hic, corrupti mollitia ipsum laboriosam obcaecati!
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet harum minima perspiciatis adipisci porro atque, eligendi nihil repellendus aliquid. Voluptas aut earum eaque accusantium tempora deleniti eius, nostrum velit similique.
					</p>
					<p>
					<button className='btn' onClick={this.props.handleClick}>Click</button>
						<span>{this.props.number}</span>
					</p>
					<div>
						<textarea 
							defaultValue={this.state.text}
							onChange={this._textChange}>
						</textarea>
						<h3>{this.state.text.length}</h3>
					</div>
				</div>
		)
	}
}

export default Article;


