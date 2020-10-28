import React from 'react';

const NewsArticle = ({ article }) => {
    console.log('should be single index of res.hits', article);
    return (
			<div className="newsarticle">
				<h2>Title: {article.title}</h2>
				<h3>Author: {article.author}</h3>
				<h3>URL: {article.url}</h3>
			</div>
		);
};

export default NewsArticle;