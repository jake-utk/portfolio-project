import React from 'react';
import NewsArticle from './NewsArticle'

const NewsReader = ({ newsArticles, setNewsArticles }) => {
    console.log('should be res.hits', newsArticles);
    return (
        <div className="newsreader">
            {newsArticles.map((article) => <NewsArticle article={article} />)}
        </div>
    );
};

export default NewsReader;