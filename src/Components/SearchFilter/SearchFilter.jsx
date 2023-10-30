import React from 'react';
import '../../App.css';
function SearchFilter({ onSearch }) {
  const handleSearch = (event) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <div className='SearchFilter'>
      <h4>Search Filter</h4>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
    </div>
  );
}

export default SearchFilter;
