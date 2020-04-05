import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	// getCurrentPositions has two callbacks: a success and failure
	window.navigator.geolocation.getCurrentPosition(
		// success callback
		(position) => console.log(position),
		// failure callback
		(err) => console.log(err)
	);
	return(
		<div>Hello World!</div>
	)
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)
