import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Navigation";
import NewsReader from "./components/NewsReader";

const App = () => {
	const [newsArticles, setNewsArticles] = useState([]);
	const url = `https://hn.algolia.com/api/v1/search?query=`; // review API docs indepth
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log('json object: ', res);
        setNewsArticles(res.hits)
        console.log(newsArticles);
			});
	}, []);

	return (
		<div>
			<header>
				<Navigation />
			</header>
			<main>
				<NewsReader />
			</main>
		</div>
	);
};

export default App;
