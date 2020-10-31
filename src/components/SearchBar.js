import React, { useState } from "react";

const SearchBar = ({
	newsArticles,
	setNewsArticles,
	queryTerm,
	setQueryTerm,
}) => {
	const [searchInput, setSearchInput] = useState('');

	let handleClick = (event) => {
		event.preventDefault();
		const url = `https://hn.algolia.com/api/v1/search?query=${event.target.id}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setNewsArticles(res.hits);
				setQueryTerm(event.target.id);
			});
	};

	let handleChange = (event) => {
		setSearchInput(event.target.value)
	};

	let handleSubmit = (event) => {
		event.preventDefault();
		const url = `https://hn.algolia.com/api/v1/search?query=${searchInput}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setNewsArticles(res.hits);
				setSearchInput('');
			});
	};

	return (
		<div>
			<form id='searchbar' onSubmit={handleSubmit}>
				<label>initiate a query => </label>
				<input type='text' value={searchInput} onChange={handleChange}/>
				<button>Search</button>
			</form>
			<form id='buttons'>
				<label>starter queries => </label>
				<button onClick={handleClick} id='today in technology'>
					today in technology
				</button>
				<button onClick={handleClick} id='react'>
					react
				</button>
				<button onClick={handleClick} id='javascript'>
					javascript
				</button>
				<button onClick={handleClick} id='css'>
					css
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
