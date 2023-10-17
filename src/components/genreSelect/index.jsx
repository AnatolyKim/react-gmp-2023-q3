import React, { useState } from "react";
import styles from './styles.module.css';

export default function GenreSelect({ genres, selectedGenre, onSelect }) {
  let [expanded, setExpanded] = useState(false);
  const [checkedValues, setCheckedValues] = useState(selectedGenre ? [ selectedGenre ] : []);

  const handleOnChange = (event, genre) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(
        checkedValues.filter((checkedValue) => checkedValue !== value)
      );
    }

    onSelect(checkedValues);
  }

  return (
    <div className={styles.container}>
      <label className={styles.label}>Genre</label>
      <div className={`${styles.toggle} ${expanded ? styles.active : ''}`} onClick={() => setExpanded(!expanded)} tabIndex="0">Select Genre</div>
      <div className={styles.options}>
        {genres.map((genre) => (
          <div key={genre} className={styles.option}>
            <label className={styles.genreContainer}>{genre}
              <input 
                type="checkbox" 
                value={genre} 
                checked={checkedValues.includes(genre)} 
                onChange={event => handleOnChange(event, genre)}
              ></input>
              <span className={styles.checkmark}></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
