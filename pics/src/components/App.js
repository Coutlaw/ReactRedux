import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
	state = { images: [] }

	// callback function
	onSearchSubmit = async (term) => {
		const response = await axios.get('https://api.unsplash.com/search/photos',
		{
			params: {
				query: term
			},
			headers: {
				Authorization: 'Client-ID l7dcR04kK52Au8y_ozrIu3pSN7V1RFkknX61Wi_ee78'
			}
		});

		this.setState({ images: response.data.results });

		// 👇 this is the pre async await way of doing things
		// .then((response) => {
		// 	console.log(response.data.results);
		// });
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}> 
				<SearchBar onSubmit={this.onSearchSubmit}/>
				Found: {this.state.images.length} images.
			</div>
		);
	}
}

export default App;
