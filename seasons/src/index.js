import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

class App extends React.Component {
	// we can remove the constructor and setting state is equivalent to using a constructor
	state = {lat: null, errorMessage: ''};

	componentDidMount() {
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

	// render will always run right before this
	componentDidUpdate() {
		console.log('my component re-rendered : an update was performed');
	}

	// Lifecycle methods
	// ComponentDidMount() : runs on component first rendering
	// ComponentDidUpdate() : runs anytime the  component re-renders
	// ComponentWillUnmount() : runs when component is no longer rendered
	
	renderContent() {
		if(this.state.errorMessage && !this.state.lat){
			return <div>Error: {this.state.errorMessage}</div>;
		} else if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		} else {
			return <Spinner text="Waiting for location access privileges"/>;
		}
	}
	render() {
		return(<div className="border red">
			{this.renderContent()}
		</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)
