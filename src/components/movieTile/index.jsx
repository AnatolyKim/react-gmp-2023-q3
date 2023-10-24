import React from 'react';
import styles from './styles.module.css';

function MovieTile({ movie, onClick }) {
  const { imageUrl, name, releaseYear, genres } = movie;

  return (
    <div className={styles.tile} onClick={() => onClick(movie)}>
      <img src={imageUrl} alt={name} />
      <div className={styles.title}>
        <p className={styles.name}>{name}</p>
        <p className={styles.year}>{releaseYear}</p>
      </div>
      <div className={styles.genres}>
        {genres.map((genre, index) => (
          <span key={index} className={styles.genre}>
            {genre}{index !== genres.length - 1 && ','}&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}

export default MovieTile;