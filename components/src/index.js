import React from 'react';
import ReactDOM from 'react-dom';
// Web pack will figure out this is a js file 👇
import CommentDetail from './CommentDetail';

const App = () => {
	// Components are the exception to the JS rule in JSX
	return (
		<div className="ui container comments">
			<CommentDetail />
			<CommentDetail />
			<CommentDetail />
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'));
