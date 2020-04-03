import React from 'react';

const ApprovalCard = (props) => {
	// we wrapped a component in another component and references it with props
	// all wrapped components come in under props.children 
	return (
		<div className="ui card">
			<div className="content">
			{props.children}
			</div>
			<div className="extra content">
				<div className="ui two buttons">
					<div className="ui basic green button">Approve</div>
					<div className="ui basic red button">Decline</div>
				</div>
			</div>
		</div>
	)
};

export default ApprovalCard;
