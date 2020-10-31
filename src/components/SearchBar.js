import React from "react";

const SearchBar = ({ newsArticles, setNewsArticles }) => {

	// fetch call here for search bar INSTEAD of trying to 
	// amend the "queryTerm" in App.js.  Eventually will
	// probably only have the query const here.  

	let handleClick = (event) => {
		event.preventDefault();
		console.log(event.target.id);
		const url = `https://hn.algolia.com/api/v1/search?query=${event.target.id}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log("json object: ", res);
				setNewsArticles(res.hits)
			})
	};

	return (
		<div>
			<form id="searchbar">
				<label>Search Hacker News:</label>
				<input></input>
			</form>
			<button onClick={handleClick} id='today in technology'>today in technology</button>
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
