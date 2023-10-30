import React, { useState, useEffect } from 'react';
import CategoryFilter from './Components/CategoryFilter/CategoryFilter';
import SearchFilter from './Components/SearchFilter/SearchFilter';
import NewsDisplay from './Components/NewsDisplay/NewsDisplay';
import Pagination from './Components/Pagination/Pagination';

function App() {
  const [newsData, setNewsData] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 3; // Number of articles per page


// data fetching from api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://linesnews.onrender.com/api/news-datas');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNewsData(data.data);
        setFilteredNews(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  //filtering data by category
  const handleCategorySelect = (category) => {
    if (Array.isArray(newsData)) {
      const filteredData = newsData.filter(article => article.attributes.category === category);
      setFilteredNews(filteredData);
      setCurrentPage(1); // Reset to the first page when filtering
    }
  };

  //filtering data by searching query string
  const handleSearch = (query) => {
    if (Array.isArray(newsData)) {
      const filteredData = newsData.filter(article =>
        article.attributes.headline.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredNews(filteredData);
      setCurrentPage(1); // Reset to the first page when searching
    }
  };

  const indexOfLastArticle = currentPage * newsPerPage;
  const indexOfFirstArticle = indexOfLastArticle - newsPerPage;
  const currentArticles = filteredNews.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1 style={{fontFamily:'Play-Fair Display'}}>News Dashboard</h1>
      <div className='Header'>
        <CategoryFilter
          className='CategoryFilter'
          categories={['SPORTS', 'POLITICS', 'WORLD', 'TECHNOLOGY', 'HEALTH']}
          onSelectCategory={handleCategorySelect}
        />
        <SearchFilter className='SearchFilter' onSearch={handleSearch} />
      </div>
      <div className='News'>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <NewsDisplay newsData={currentArticles} />
        </div>
        <Pagination
          itemsPerPage={newsPerPage}
          totalItems={filteredNews.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default App;
