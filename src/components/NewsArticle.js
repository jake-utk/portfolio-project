import React from "react";

const NewsArticle = ({ article }) => {

	if (article.url === null || article.title === null || article.title === '') {
		return null;
	} else {
		return (
			<div className='newsArticle'>
				<h3 id='title'><a className='greentext'>TITLE:</a> {article.title}</h3>
				<h4 id='date'><a className='greentext'>DATE:</a> {article.created_at}</h4>
				<h4 id='author'><a className='greentext'>AUTHOR:</a> {article.author}</h4>
				<h4 id='url'>
					<a href={article.url}>FULL ARTICLE</a>
				</h4>
				<p id='storytext'><a className='greentext'>STORY:</a> {article.story_text}</p>
			</div>
		);
	}
};

export default NewsArticle;
