import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Exel from './Exel/Exel'

class Whinepad extends Component {

	static propTypes= {
		getKey: PropTypes.func.isRequired,
	}

	state = {
		headers: [
		'Book', 'Author','Languege','Published','Sales'],
		data: [
			['The Lord of the Rings', 'J. R. R. Tolkien', 'English', '1945-1955', '150 million'],
			['Le Petit Prince (The Little Prince)', 'Antone de Saint-Exupery', 'French', '1943', '140 million'],
			 ["Harry Potter and the Philosopher's Stone", "J. K. Rowling","English", "1997", "107 million"],
			["And Then There Were None", "Agatha Christie", "English", "1939", "100 million"],
			["Dream of the Red Chamber", "Cao Xueqin","Chinese", "1754–1791", "100 million"],
			["The Hobbit", "J. R. R. Tolkien","English", "1937", "100 million"],
			["She: A History of Adventure", "H. Rider Haggard","English", "1887", "100 million"]
		]
	}

	render() {
		return (
			<div id='winepad'>
				<Exel
					getKey={this.props.getKey}
					data={this.state.data}
					headers={this.state.headers}/>
			</div>
			)
	}
}

export default Whinepad