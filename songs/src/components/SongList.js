import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
	renderList() {
		return this.props.songs.map((songs) => {
			return (
				<div className="item" key={songs.title}>
					<div className="right floated content">
						<button className="ui button primary">
							Select
						</button>
					</div>
					<div className="content">{songs.title}</div>
				</div>
			);
		});
	}

	render() {
		// proof that props is now redux state
		//console.log(this.props.songs);
		return <div className="ui divided list">{this.renderList()}</div>; 
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
