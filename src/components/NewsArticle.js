import React from "react";

const NewsArticle = ({ article }) => {

	if (article.url == null || article.title == null) {
		return null;
	} else {
		return (
			<div className='newsArticle'>
				<h3 id='title'>TITLE: <a id='whitetext'>{article.title}</a></h3>
				<h4 id='date'>DATE: <a id='whitetext'>{article.created_at}</a></h4>
				<h4 id='author'>AUTHOR: <a id='whitetext'>{article.author}</a></h4>
				<h4 id='url'>
					<a href={article.url}>LINK</a>
				</h4>
				<p id='storytext'>STORY: <a id='whitetext'>{article.story_text}</a></p>
			</div>
		);
	}
};

export default NewsArticle;
