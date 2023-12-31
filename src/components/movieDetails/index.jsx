import React, { useState } from 'react';
import styles from './styles.module.css'
import { Outlet, useLoaderData } from 'react-router-dom';
import { mapMovieData } from '../../helpers/movie.helper';
import { v4 as uuid } from 'uuid';

function MovieDetails() {
  const data = mapMovieData(useLoaderData());
  const [ movieData ] = useState(useLoaderData());

  const { imageUrl, name, releaseYear, rating, duration, description, genres } = data;

  function convertMinutesToHours(mins) {
    return `${Math.floor(mins / 60)}h ${mins % 60}min`;
  }

  return (
    <div className={styles.details}>
      <div className={styles.poster}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <h3>{name}</h3>
          <div className={styles.rating}>{rating}</div>
        </div>
        <div className={styles.genres}>
          {genres.map((genre, index) => (
            <span key={uuid()}>
              {genre}{index !== genres.length - 1 && ','}&nbsp;
            </span>
          ))}
        </div>
        <p className={styles.timings}>
          <span>{releaseYear}</span>
          <span>{convertMinutesToHours(duration)}</span>
        </p>
        <p className={styles.description}>{description}</p>
      </div>
      <Outlet context={[movieData]}/>
    </div>
  );
}

export default MovieDetails;