import { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import classNames from "classnames";

import styles from './styles.module.css';

type GenreSelect = {
  genres: string[];
  selectedGenres: string[];
  onSelect: (genres: string[]) => void
}

export default function GenreSelect({ genres = [], selectedGenres = [], onSelect }: GenreSelect) {
  const [expanded, setExpanded] = useState(false);
  const [checkedValues, setCheckedValues] = useState(selectedGenres.length ? selectedGenres : []);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const update = checked ? [...checkedValues, value] : checkedValues.filter((checkedValue) => checkedValue !== value);

    setCheckedValues(update);
  }

  useEffect(() => {
    onSelect(checkedValues);
  }, [checkedValues]);

  return (
    <div className={styles.container}>
      <label className={styles.label}>Genre</label>
      <div className={classNames(styles.toggle, expanded ? styles.active : '')} onClick={() => setExpanded(!expanded)} tabIndex={0}>Select Genre</div>
      <div className={styles.options}>
        {genres.map((genre) => (
          <div key={uuid()} className={styles.option}>
            <label className={styles.genreContainer}>{genre}
              <input 
                type="checkbox" 
                value={genre} 
                checked={checkedValues.includes(genre)} 
                onChange={handleOnChange}
              ></input>
              <span className={styles.checkmark}></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
