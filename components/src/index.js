import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// Web pack will figure out this is a js file 👇
import CommentDetail from './CommentDetail';

const App = () => {
	// Components are the exception to the JS rule in JSX
	return (
		<div className="ui container comments">
			<CommentDetail author="Sam" />
			<CommentDetail author="Alex" />
			<CommentDetail author="Jane" />
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'));
