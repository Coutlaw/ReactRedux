import React from 'react';

const seasonConfig = {
	summer: { text: 'Lets hit the beach', icon: 'sun' },
	winter: { text: 'Burr, it is chilly', icon: 'snowflake' }
};

const getSeason = (lat, month) => {
	 if(month > 2 && month < 9) {
		 return seasonConfig.summer;
	 } else {
		return seasonConfig.winter;
	 }
}

const SeasonDisplay = (props) => {
	const { text, icon } = getSeason(props.lat, new Date().getMonth());

	return (
	<div>
		<i className={`${icon} icon`} />
		<h1>{text}</h1>
		<i className={`${icon} icon`} />
	</div>
	)
}

export default SeasonDisplay;
