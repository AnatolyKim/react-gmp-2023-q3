"use client"

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'
import { mapMovieData } from '../../helpers/movie.helper';
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';

function MovieDetails() {
  const [data, setData] = useState({});
  const router = useRouter();
  const { movieId } = router.query;

 
  useEffect(() => {
    if (movieId) {
      fetch(`http://localhost:4000/movies/${router.query.movieId}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
      .catch((err) => console.warn(err))
    }
  }, [movieId])

  const movie = mapMovieData(data);

  const { imageUrl, name, releaseYear, rating, duration, description, genres } = movie;

  function convertMinutesToHours(mins) {
    return `${Math.floor(mins / 60)}h ${mins % 60}min`;
  }

  return (
    <div className={styles.details}>
      <div className={styles.poster}>
        <img className={styles.img} src={imageUrl} alt={name} />
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <h3>{name}</h3>
          <div className={styles.rating}>{rating}</div>
        </div>
        <div className={styles.genres}>
          {genres?.map((genre, index) => (
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
    </div>
  );
}

export default MovieDetails;