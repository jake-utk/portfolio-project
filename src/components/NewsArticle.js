import React from "react";

const NewsArticle = ({ article }) => {
	console.log("should be single index of res.hits", article);
	return (
		<div className='newsArticle'>
			<h3 id='title'>{article.title}</h3>
			<h4 id='author'>Author: {article.author}</h4>
			<h4 id='url'>
				<a href={article.url}>Link to Article </a>
			</h4>
		</div>
	);
};

export default NewsArticle;
