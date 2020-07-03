import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => this.setState({ robots: users}));
	}

	onSearchChange = (e) => {
			this.setState({ searchfield: e.target.value })
	}
	render() {
		const { robots, searchfield } = this.state;
		const filteredRobotsNames = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if (!robots.length) {
			return <h1 className="tc f1">Loading...</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobotsNames}/>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;