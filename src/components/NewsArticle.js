import React from "react";

const NewsArticle = ({ article }) => {
	// console.log("should be single index of res.hits", article);
	// console.log('TITLE: ', article.title);
	// console.log('STORY_TEXT: ', article.story_text);

	if (article.url == null || article.title == null) {
		// console.log('NO STORY TEXT');
		return null;
	} else {
		return (
			<div className='newsArticle'>
				<h3 id='title'>TITLE: {article.title}</h3>
				<h4 id='date'>DATE: {article.created_at}</h4>
				<h4 id='author'>AUTHOR: {article.author}</h4>
				<h4 id='url'>
					<a href={article.url}>LINK</a>
				</h4>
				<p id='storytext'>STORY: {article.story_text}</p>
			</div>
		);
	}
};

export default NewsArticle;
