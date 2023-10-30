import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';

function NewsDisplay({ newsData }) {
      return (
    <div>
      {newsData.map((article, index) => (
        <NewsArticle key={index} article={article.attributes} />
      ))}
    </div>
  );
}

export default NewsDisplay;
