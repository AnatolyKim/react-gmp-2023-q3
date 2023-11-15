"use client"

import React from 'react';
import styles from './styles.module.css';
import ContextMenu from '../contextMenu';
import { v4 as uuid } from 'uuid';

function MovieTile({ movie }) {
  const { imageUrl, name, releaseYear, genres, id } = movie;

  return (
    <div className={styles.tile}>
      <img className={styles.img} src={imageUrl} alt={name} />
      <ContextMenu actions={['edit', 'delete']} id={id}/>
      <div className={styles.title}>
        <p className={styles.name}>{name}</p>
        <p className={styles.year}>{releaseYear}</p>
      </div>
      <div className={styles.genres}>
        {genres.map((genre, index) => (
          <span key={uuid()} className={styles.genre}>
            {genre}{index !== genres.length - 1 && ','}&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}

export default MovieTile;