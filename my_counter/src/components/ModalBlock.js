
import React from 'react'

class ModalBlock extends React.Component {
	state = {
		isOpened: true,
	}


	hideBlock = (e) => {
		this.setState(() => ({
			isOpened: !this.state.isOpened
		}))
	}

	render() {
		let { login, password } = { ...this.props.userAuthData }
		return (
				<div className='modal'>
					<div className='modalBlock'>
					<p>Lorem</p>
					<p>dd</p>
						<span className='exit'
									onClick={this.hideBlock}>x</span>
						<h1>Hello! {login}</h1>
						<p>
							<button className='accept'
										onClick={this.hideBlock}><span>Accept</span></button>
							<button className='reject'
										onClick={this.hideBlock}><span>Reject</span></button>
						</p>
				</div>
			</div>
		);

	}

}



export default ModalBlock;
