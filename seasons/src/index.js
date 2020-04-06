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

	componentDidMount() {
		console.log('my component rendered on the screen');
	}

	// render will always run right before this
	componentDidUpdate() {
		console.log('my component re-rendered : an update was performed');
	}

	// Lifecycle methods
	// ComponentDidMount() : runs on component first rendering
	// ComponentDidUpdate() : runs anytime the  component re-renders
	// ComponentWillUnmount() : runs when component is no longer rendered
	
	// required for every React.Component
	render() {
		// conditional rendering
		if(this.state.errorMessage && !this.state.lat){
			return <div>Error: {this.state.errorMessage}</div>;
		} else if (!this.state.errorMessage && this.state.lat) {
			return <div>Latitude: {this.state.lat}</div>;
		} else {
			return <div>Loading</div>;
		}
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)
