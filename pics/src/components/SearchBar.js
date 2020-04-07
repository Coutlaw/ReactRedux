import React from 'react';
import { render } from 'react-dom';

class SearchBar extends React.Component {

	onInputChanged(event) {
		console.log(event.target.value);
	}

	// onInputClick() {
	// 	console.log('input was clicked');
	// }

	render() {
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input type="text"
						onChange={this.onInputChanged}
						//onClick={this.onInputClick}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
