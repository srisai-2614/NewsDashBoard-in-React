import React from 'react';
import './NewsArticle.css'; // Import the CSS file

function NewsArticle({ article }) {
  return (
    <div className="news-article">
      <img src={article.newsIcon} alt="News Icon" className="news-icon" />
      <div className="article-details">
        <h3 className="headline">{article.headline}</h3>
        <p className="source">{article.newsSource}</p>
        <p className="hashtags">Hashtags: {article.hashtags}</p>
        <a href='#' className='Link'>Read more</a>
      </div>
    </div>
  );
}

export default NewsArticle;
