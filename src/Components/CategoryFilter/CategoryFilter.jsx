import React from 'react';
import '../../App.css';

function CategoryFilter({ categories, onSelectCategory }) {
  return (
    <div className='CategoryFilter'>
      <h4>
        Category Filter
      </h4>
      <div style={{width:'2em',height:'1.2em'}}>
        <select onChange={(e) => onSelectCategory(e.target.value)}>
          <option value="">Select a category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CategoryFilter;
