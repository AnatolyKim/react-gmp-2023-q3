import React, { useState } from "react";
import styles from './styles.module.css';

export default function GenreSelect({ genres = [], selectedGenre = '', onSelect }) {
  let [expanded, setExpanded] = useState(false);
  const [checkedValues, setCheckedValues] = useState(selectedGenre ? [ selectedGenre ] : []);

  const handleOnChange = (event) => {
    const { value, checked } = event.target;
    let selectedGenres = checkedValues;

    if (checked) {
      selectedGenres.push(value);
    } else {
      selectedGenres = selectedGenres.filter((checkedValue) => checkedValue !== value);
    }

    setCheckedValues(selectedGenres);
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
                onChange={event => handleOnChange(event)}
              ></input>
              <span className={styles.checkmark}></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
