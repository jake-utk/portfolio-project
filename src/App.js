import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Navigation";
import NewsReader from "./components/NewsReader";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
	useEffect(() => {
    const query=`react`
    const url = `https://hn.algolia.com/api/v1/search?query=${query}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log("json object: ", res);
				setNewsArticles(res.hits);
      })
      .catch(console.error)
	}, []);

	return (
		<div className='App'>
			<header>
				<Navigation />
			</header>
			<main>
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
