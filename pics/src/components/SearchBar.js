import React from 'react';
import { render } from 'react-dom';

class SearchBar extends React.Component {

	state = { term: ''};

	render() {
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input type="text"
						// will trigger a re-render by using state
						onChange={(e) => this.setState({term: e.target.value})}
						// will overwrite whatever text was previously in the input during the re-render
						value={this.state.term}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
