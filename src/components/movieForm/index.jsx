import React, { useState } from 'react';
import GenreSelect from '../genreSelect';
import styles from './styles.module.css';

function MovieForm({ initialMovieInfo = {}, genreInfo = {}, header = 'Edit Movie', onSubmit }) {
  const [movieInfo, setMovieInfo] = useState(initialMovieInfo);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMovieInfo({ ...movieInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(JSON.stringify(Object.fromEntries(new FormData(event.target))));
  };

  return (
    <form className={styles.movieForm} onSubmit={handleSubmit}>
      <h3 className={styles.formHeader}>{header}</h3>
      <div className={`${styles.gridContainer} ${styles.formControls}`}>
        <label className={`${styles.gridItem} ${styles.formControl}`}>
          <span>Movie Title</span>
          <input type="text" name="title" defaultValue={movieInfo.name || ''} onChange={handleInputChange} />
        </label>
        <label className={`${styles.gridItem} ${styles.formControl}`}>
          <span>Movie URL</span>
          <input type="text" name="director" defaultValue={movieInfo.url || ''} onChange={handleInputChange} />
        </label>
        <GenreSelect className={`${styles.gridItem} ${styles.formControl}`} name="genre" genres={genreInfo.genres} selectedGenre={genreInfo.selectedGenre} onSelect={handleInputChange}></GenreSelect>
        <label className={`${styles.gridItem} ${styles.formControl}`}>
          <span>Release Date</span>
          <input type="number" name="year" defaultValue={movieInfo.releaseYear || ''} onChange={handleInputChange} />
        </label>
        <label className={`${styles.gridItem} ${styles.formControl}`}>
          <span>Rating</span>
          <input type="number" name="rating" defaultValue={movieInfo.rating || ''} onChange={handleInputChange} />
        </label>
        <label className={`${styles.gridItem} ${styles.formControl}`}>
          <span>Runtime</span>
          <input type="text" name="runtime" defaultValue={movieInfo.duration || ''} onChange={handleInputChange} />
        </label>
        <label className={`${styles.gridItem} ${styles.formControl}`}>
          <span>Overview</span>
          <textarea name="runtime" defaultValue={movieInfo.description || ''} onChange={handleInputChange}></textarea>
        </label>
      </div>
      <div className={styles.formActions}>
        <button type="reset" className="secondary">Reset</button>
        <button type="submit" className="primary">Submit</button>
      </div>
    </form>
  );
}

export default MovieForm;