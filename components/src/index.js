import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// Web pack will figure out this is a js file 👇
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	// Components are the exception to the JS rule in JSX
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<h4>Warning</h4>
				Are you sure you want to do this?
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
				author="Sam" 
				timeAgo="Today at 4:45PM" 
				comment="nice comments" 
				avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
				author="Alex"
				timeAgo="Today at 2:00AM"
				comment="woot a comment"
				avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
				author="Jane"
				timeAgo="Yesterday at 5:00PM"
				comment="1337"
				avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'));
