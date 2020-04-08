import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
	renderList() {
		return this.props.songs.map((song) => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button className="ui button primary"
						onClick={() => this.props.selectSong(song)}>
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
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
	return {
		songs: state.songs
	};
}

// connects redux to the component
// giving it to our dispatch
export default connect(mapStateToProps, {
	// passes our action creator to props
	selectSong: selectSong
}) (SongList);
