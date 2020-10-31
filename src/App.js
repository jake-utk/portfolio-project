import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Navigation";
import NewsReader from "./components/NewsReader";
import SearchBar from "./components/SearchBar"

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  let queryTerm = '';

	useEffect(() => {
		let queryTerm = `today in technology`;
		const url = `https://hn.algolia.com/api/v1/search?query=${queryTerm}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log("json object: ", res);
				setNewsArticles(res.hits);
			})
			.catch(console.error);
	}, []);

	if (!newsArticles) {
		return <h1>Loading...</h1>
	}

	return (
		<div className='App'>
			<header>
				<Navigation queryTerm={queryTerm} />
			</header>
			<main>
				<SearchBar newsArticles={newsArticles} setNewsArticles={setNewsArticles} />
				<Route
					path='/'
					exact
					render={() => {
						return (
							<NewsReader
								newsArticles={newsArticles}
								setNewsArticles={setNewsArticles}
							/>
						);
					}}
				/>
			</main>
		</div>
	);
};

export default App;
