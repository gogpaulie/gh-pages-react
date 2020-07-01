import React from 'react';

class Hello extends React.Component {
	render() {
		return (
			<div className='f1 tc'>
				<h1 className='bg-red'>Hello World</h1>
				<p>{this.props.greeting}</p>
			</div>
		)
	}
}

export default Hello;