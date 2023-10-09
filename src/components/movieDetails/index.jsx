import React from 'react';
import './styles.css'

function MovieDetails({ movie }) {
  const { imageUrl, name, releaseYear, rating, duration, description, genres } = movie;

  function convertMinutesToHours(mins) {
    return `${Math.floor(mins / 60)}h ${mins % 60}min`;
  }

  return (
    <div className="movie-details">
      <div className="movie-details-poster">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="movie-details-info">
        <div className="movie-details-header">
          <h3>{name}</h3>
          <div className="movie-details-rating">{rating}</div>
        </div>
        <div className="movie-details-genres">
          {genres.map((genre, index) => (
            <span key={index} className="movie-tile-genre">
              {genre}{index !== genres.length - 1 && ','}&nbsp;
            </span>
          ))}
        </div>
        <p className="movie-details-timings">
          <span>{releaseYear}</span>
          <span>{convertMinutesToHours(duration)}</span>
        </p>
        <p className="movie-details-description">{description}</p>
      </div>
    </div>
  );
}

export default MovieDetails;