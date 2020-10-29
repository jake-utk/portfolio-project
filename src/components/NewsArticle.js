import React from "react";

const NewsArticle = ({ article }) => {
	console.log("should be single index of res.hits", article);
	return (
		<div className='newsarticle'>
			<h3 className='title'>{article.title}</h3>
			<h4 className='author'>Author: {article.author}</h4>
			<h4 className='url'>
				<a href={article.url}>Link to Article </a>
			</h4>
		</div>
	);
};

export default NewsArticle;
