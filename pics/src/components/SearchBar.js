import React from 'react';
import { render } from 'react-dom';

class SearchBar extends React.Component {

	state = { term: ''};
	
	// arrow function instead of a typical function syntax
	onFormSubmit = (event) => {
		event.preventDefault();
		// get the parents callback
		this.props.onSubmit(this.state.term);
	}

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Image Search</label>
						<input type="text"
						// will overwrite whatever text was previously in the input during the re-render
						value={this.state.term}
						// will trigger a re-render by using state
						onChange={(e) => this.setState({term: e.target.value})}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
