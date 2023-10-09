import React from 'react';
import './styles.css';

function MovieTile({ movie, onClick }) {
  const { imageUrl, name, releaseYear, genres } = movie;

  return (
    <div className="movie-tile" onClick={() => onClick(movie)}>
      <img src={imageUrl} alt={name} />
      <div className="movie-title">
        <p className="movie-tile-name">{name}</p>
        <p className="movie-tile-release-year">{releaseYear}</p>
      </div>
      <div className="movie-tile-genres">
        {genres.map((genre, index) => (
          <span key={index} className="movie-tile-genre">
            {genre}{index !== genres.length - 1 && ','}&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}

export default MovieTile;