import { ChangeEvent } from 'react';
import styles from './styles.module.css'

type SortControl = {
  currentSelection: string,
  onSelectionChange: (change: string) => void,
}

function SortControl({ currentSelection, onSelectionChange }: SortControl) {
  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelectionChange(e?.target.value);
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