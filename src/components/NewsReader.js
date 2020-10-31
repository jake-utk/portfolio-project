import React, { useState } from 'react';
import NewsArticle from './NewsArticle'

const NewsReader = ({ newsArticles, setNewsArticles }) => {
    const [titlebar, setTitlebar] = useState('...')

    console.log('should be res.hits', newsArticles);
    return (
        <div className="newsreader">
            <p>Searching for {titlebar}</p>
            {newsArticles.map((article) => <NewsArticle key={article.objectID} article={article} />)}
        </div>
    );
};

export default NewsReader;