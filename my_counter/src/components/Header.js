import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {

	render() {

		return (

				<div>
					Header
				</div>

		);

	}


}

Header.propTypes = {
	title: PropTypes.string
}

Header.defaultProps = {
	title: `It's Header part`
}

export default Header;


