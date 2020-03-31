// Import the React and ReactDOM libraries
// these come from node_modules which is why a path is not required
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
// function component
const App = () => {
	const buttonText = {text: 'click me'};
	// can be referenced with {var name}'
	// you must call this with buttonText.text, react does not know how to destructure an object as an attribute on an element
	const labelText = 'Enter Name:';

	return (
		<div>
			<label className="label" htmlFor="name">
				{labelText}
			</label>
			<input id="name" type="text" />
			<button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
		</div>
	);
};

// Display the component on the screen
ReactDOM.render(
	// jsx tags referencing the App function
	<App />,
	// reference to the root id
	document.querySelector('#root')
);
