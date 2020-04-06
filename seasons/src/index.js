import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// component constructor which is ran on initialization
	constructor(props) {
		// superclass constructor
		super(props);

		// state object: object with lat property (null because it has no value)
		this.state = { lat: null, errorMessage: '' };

		// getCurrentPositions has two callbacks: a success and failure
		window.navigator.geolocation.getCurrentPosition(
			// success callback
			(position) => {
				// Updates our state object which will re-trigger the render function
				this.setState({ lat: position.coords.latitude });

				//WE NEVER WANT TO DO THIS
				//this.state.lat = position.coords.latitude
				// we only do direct assignments on initialization
			},
			// failure callback
			(err) => {
				this.setState({ errorMessage: err.message});
			}
		);
	}
	
	// required for every React.Component
	render() {
		return (
		<div>
			Latitude: {this.state.lat}
			<br />
			Error: {this.state.errorMessage}
		</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)
