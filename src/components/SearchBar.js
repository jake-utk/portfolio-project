import React from "react";

const SearchBar = ({ queryTerm }) => {
	let handleClick = (event) => {
		event.preventDefault();
		console.log(event.target.id);
		return (queryTerm = event.target.id);
	};

	return (
		<div>
			<form>
				<label>Search Hacker News:</label>
				<input></input>
			</form>
			<button onClick={handleClick} id='react'>
				react
			</button>
			<button onClick={handleClick} id='javascript'>
				javascript
			</button>
			<button onClick={handleClick} id='css'>
				css
			</button>
		</div>
	);
};

export default SearchBar;
