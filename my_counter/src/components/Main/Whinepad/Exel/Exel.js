import React, {Component} from 'react'
import PropTypes from 'prop-types'


class Exel extends Component {

	static propTypes = {
		data: PropTypes.arrayOf(
			PropTypes.arrayOf(
				PropTypes.string)).isRequired,
		headers: PropTypes.arrayOf(PropTypes.string).isRequired,
		getKey: PropTypes.func.isRequired
	}

_sort = (e) => {
	var column = e.target.cellIndex;
	var data = [...this.state.data];
	data.sort((a,b) => a[column] > b[column] ? 1 : -1)
	this.setState(() => ({
	data: data
}))
}

	render() {

		return (
			<div id='exel'>
				<h2>The table of books chart</h2>
				<table>
					<thead onClick={this._sort}>
						<tr>
							{this.props.headers.map( title =>
								<th key={this.props.getKey(title)}>
										{title}
								</th>
							 )}
						</tr>
					</thead>
					<tbody>
						{this.props.data.map( (row, index) =>
							<tr key={index}>
								{row.map(cell => 
									<td key={this.props.getKey(cell)}>
										{cell}
									</td>
								)}
							</tr>
							)
						}
					</tbody>
				</table>
			</div>

			)
	}
}

export default Exel