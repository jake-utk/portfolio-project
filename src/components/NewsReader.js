import React from 'react';
import NewsArticle from './NewsArticle'

const NewsReader = ({ newsArticles, setNewsArticles, queryTerm }) => {

    return (
        <div className="newsreader">
            <p>current query( {queryTerm} )</p>
            {newsArticles.map((article) => <NewsArticle key={article.objectID} article={article} />)}
        </div>
    );
};

export default NewsReader;