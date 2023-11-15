"use client"

import React from 'react';
import styles from './styles.module.css'

function SortControl({ currentSelection, onSelectionChange }) {
  const handleSelectionChange = (e) => {
    onSelectionChange(e.target.value);
  };

  return (
    <div className={styles.control}>
      <label htmlFor="sort-by" className={styles.label}>Sort by:</label>
      <select id="sort-by" className={styles.select} defaultValue={currentSelection} onChange={handleSelectionChange}>
        <option value="release_date">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}

export default SortControl;