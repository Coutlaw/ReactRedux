import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
	// callback function
	onSearchSubmit(term) {
		axios.get('https://api.unsplash.com/search/photos',
		{
			params: {
				query: term
			},
			headers: {
				Authorization: 'Client-ID l7dcR04kK52Au8y_ozrIu3pSN7V1RFkknX61Wi_ee78'
			}
		});
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}> 
				<SearchBar onSubmit={this.onSearchSubmit}/>
			</div>
		);
	}
}

export default App;
