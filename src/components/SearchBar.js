import React, { useState } from "react";

const SearchBar = ({
	newsArticles,
	setNewsArticles,
	queryTerm,
	setQueryTerm,
}) => {
	const emptySearch = "";
	const [searchInput, setSearchInput] = useState(emptySearch);

	let handleClick = (event) => {
		event.preventDefault();
		const url = `https://hn.algolia.com/api/v1/search?query=${event.target.id}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log("json object: ", res);
				setNewsArticles(res.hits);
				setQueryTerm(event.target.id);
			});
	};

	let handleChange = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		// setNewsArticles(event.target.value)
	};

	let handleSubmit = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		// let newSearch = event.value
		const url = `https://hn.algolia.com/api/v1/search?query=${searchInput}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log("json object: ", res);
				setNewsArticles(res.hits);
				setSearchInput(emptySearch);
			});
	};

	return (
		<div>
			<form id='searchbar'>
				<label>initiate a query => </label>
				<input type='text' onSubmit={handleSubmit}></input>
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
