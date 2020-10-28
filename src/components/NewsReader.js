import React from 'react';
import NewsArticle from './NewsArticle'

const NewsReader = ({ newsArticles, setNewsArticles }) => {
    console.log('should be res.hits', newsArticles);
    return (
        <div className="newsreader">
            <p>Articles from React:</p>
            {newsArticles.map((article) => <NewsArticle key={article.objectID} article={article} />)}
        </div>
    );
};

export default NewsReader;