import React from 'react';
import './styles.css'

function SortControl({ currentSelection, onSelectionChange }) {
  const handleSelectionChange = (e) => {
    onSelectionChange(e.target.value);
  };

  return (
    <div className='sort-control'>
      <label htmlFor="sort-by" className='sort-control-label'>Sort by:</label>
      <select id="sort-by" className='sort-control-select' defaultValue={currentSelection} onChange={handleSelectionChange}>
        <option value="release-date">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}

export default SortControl;