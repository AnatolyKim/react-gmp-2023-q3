import React, { useState } from 'react';
import GenreSelect from '../genreSelect';
import styles from './styles.module.css';

function AddMovieForm({ genres = [], header = 'Add Movie', onSubmit }) {
  const [movieInfo, setMovieInfo] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMovieInfo({ ...movieInfo, [name]: value });
  };

  const handleGenreChange = (genres) => {
    setMovieInfo({ ...movieInfo, genres });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(movieInfo);
  };

  return (
    <form className={styles.movieForm} onSubmit={handleSubmit}>
      <h3 className={styles.formHeader}>{header}</h3>
      <div className={`${styles.gridContainer} ${styles.formControls}`}>
        <label className={`${styles.gridItem} ${styles.formControl}`}>
          <span>Movie Title</span>
          <input type="text" name="title" defaultValue={''} onChange={handleInputChange} />
        </label>
        <label className={`${styles.gridItem} ${styles.formControl}`}>
          <span>Poster URL</span>
          <input type="text" name="poster_path" defaultValue={''} onChange={handleInputChange} />
        </label>
        <GenreSelect className={`${styles.gridItem} ${styles.formControl}`} name="genre" genres={genres} selectedGenre={''} onSelect={handleGenreChange}></GenreSelect>
        <label className={`${styles.gridItem} ${styles.formControl}`}>
          <span>Release Date</span>
          <input type="date" name="release_date" defaultValue={0} onChange={handleInputChange} />
        </label>
        <label className={`${styles.gridItem} ${styles.formControl}`}>
          <span>Rating</span>
          <input type="number" name="vote_average" defaultValue={0} onChange={handleInputChange} />
        </label>
        <label className={`${styles.gridItem} ${styles.formControl}`}>
          <span>Runtime</span>
          <input type="number" name="runtime" defaultValue={0} onChange={handleInputChange} />
        </label>
        <label className={`${styles.gridItem} ${styles.formControl}`}>
          <span>Overview</span>
          <textarea name="overview" defaultValue={''} onChange={handleInputChange}></textarea>
        </label>
      </div>
      <div className={styles.formActions}>
        <button type="reset" className="secondary">Reset</button>
        <button type="submit" className="primary">Submit</button>
      </div>
    </form>
  );
}

export default AddMovieForm;