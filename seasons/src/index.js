import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// component constructor which is ran on initialization
	constructor(props) {
		// superclass constructor
		super(props);

		// state object: object with lat property (null because it has no value)
		this.state = { lat: null };
	}
	
	// required for every React.Component
	render(){
			// getCurrentPositions has two callbacks: a success and failure
			window.navigator.geolocation.getCurrentPosition(
				// success callback
				(position) => console.log(position),
				// failure callback
				(err) => console.log(err)
			);
		return <div>Latitude: </div>
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)
