import React, { Component } from 'react'
import PropTypes from 'prop-types'
import getKey from '../../../func/getKey'
class Exel extends Component {

	static propTypes = {
		data: PropTypes.arrayOf(
			PropTypes.arrayOf(
				PropTypes.string)).isRequired,
		headers: PropTypes.arrayOf(PropTypes.string).isRequired
	}

		state = {
			headers: ['name', 'location','age','phone','email'],
			data: this.props.data,
			contacts: [],
	}

	componentDidMount() {
		const data = this.fetchInitData()
		.then(users => (
			this.setState({
				contacts: this.createArrays(users),
			}))
		)
	}

	fetchInitData() {
		return fetch( 'https://randomuser.me/api/?results=10' )
			.then( results => results.json() )
				.then(data => {
					return data.results.map( elem => {
						return {
							name: `${ elem.name.first } ${ elem.name.last }`,
							location: `${ elem.location.street } ${ elem.location.city }`,
							age: elem.dob.age,
							phone: elem.phone,
							email: elem.email
						}
					})
				})
	}

 createArrays = (elem) => {
	let data = elem.map(obj => {
		return [obj.name, obj.location, obj.age, obj.phone, obj.email]
	})
	return data;
}

	_sort = (e) => {
		var column = e.target.cellIndex;
		var data = [...this.state.contacts];
		data.sort((a,b) => a[column] > b[column] ? 1 : -1)
		this.setState(() => ({
			contacts: data
		}))
	}

	render() {
		console.log('render',this.state)
		return (
			<div id='exel'>
				<h2>The table of books chart</h2>
				<table>
					<thead onClick={ this._sort }>
						<tr>
							{this.state.headers.map( title =>
								<th key={ getKey(title) }>
										{ title }
								</th>
							 )}
						</tr>
					</thead>
					<tbody>
						{this.state.contacts.map( (row, index) =>
							<tr key={ index }>
								{row.map(cell => 
									<td key={ getKey(cell) }>
										{ cell }
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