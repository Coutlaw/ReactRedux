import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
	render() {
		// proof that props is now redux state
		//console.log(this.props.songs);
		return <div>SongList</div>; 
	}
}

// this will show up as props to the containing component 👆
const mapStateToProps = (state) => {

	console.log(state);
	return {
		songs: state.songs
	};
}

// connects redux to the component
export default connect(mapStateToProps) (SongList);
