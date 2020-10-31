import React from "react";

const NewsArticle = ({ article }) => {
	console.log("should be single index of res.hits", article);
	console.log('title here, trying to hide if null: ', article.title);
	console.log('trying to access story_text: ', article.story_text);

	if (article.title === null) {
		return null;
	} else {
		return (
			<div className='newsArticle'>
				<h3 id='title'>TITLE: {article.title}</h3>
				<h4 id='author'>Author: {article.author}</h4>
				<h4 id='url'>
					<a href={article.url}>Link to Article </a>
				</h4>
				<p id='story_text'>{article.story_text}</p>
			</div>
		);
	}
};

export default NewsArticle;
