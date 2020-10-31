import React from "react";
import NewsArticle from "./NewsArticle";

const NewsReader = ({ newsArticles, queryTerm }) => {
	return (
		<div className='newsreader'>
			<p id='currentquery'>
				<a className='greentext'>current query (</a> {queryTerm}{" "}
				<a className='greentext'>)</a>
			</p>
			<p className='purpletext' id='return'>
				Return (
			</p>
			{newsArticles.map((article) => (
				<NewsArticle key={article.objectID} article={article} />
			))}
            <p className='purpletext'> )</p>
		</div>
	);
};

export default NewsReader;
