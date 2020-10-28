import React from "react";

const NewsArticle = ({ article }) => {
	console.log("should be single index of res.hits", article);
	return (
		<div className='newsarticle'>
			<h2 className='title'>{article.title}</h2>
			<h3 className='author'>Author: {article.author}</h3>
			<h3 className='url'>
				<a href={article.url}>Link to Article </a>
			</h3>
		</div>
	);
};

export default NewsArticle;
