import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
	// images is an object with id, description and urls
	const images = props.images.map(({id, description, urls}) => {
		return (
		<div key={id}>
			<img src={urls.regular} alt={description} />
		</div>
		);
	});
	return (
	<div className="image-list">{images}</div>
	);
};

export default ImageList
