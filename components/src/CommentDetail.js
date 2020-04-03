import React from 'react';

const CommentDetail = (props) => {
	// so we can see props coming through to the component
	console.log(props)
	return (
		<div className="comment">
				<a href="/" className="avatar">
					<img alt="avatar" src={props.avatar}>
					</img>
				</a>
				<div className="content">
					<a href="/" className="author">
						{props.author}
					</a>
					<div className="metadata">
						<span className="date">{props.timeAgo}</span>
					</div>
					<div className="text">{props.comment}</div>
				</div>
			</div>
	)
}

// makes this visible to our other files
export default CommentDetail;
