import React, { useState } from 'react';
import GenreSelect from '../genreSelect';
import './styles.css';

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
    <form className="movie-form" onSubmit={handleSubmit}>
      <h3 className="movie-form-header">{header}</h3>
      <div className="grid-container movie-form-controls">
        <label className="grid-item movie-form-control">
          <span>Movie Title</span>
          <input type="text" name="title" defaultValue={movieInfo.name || ''} onChange={handleInputChange} />
        </label>
        <label className="grid-item movie-form-control">
          <span>Movie URL</span>
          <input type="text" name="director" defaultValue={movieInfo.url || ''} onChange={handleInputChange} />
        </label>
        <GenreSelect className="grid-item movie-form-control" name="genre" genres={genreInfo.genres} selectedGenre={genreInfo.selectedGenre} onSelect={handleInputChange}></GenreSelect>
        <label className="grid-item movie-form-control">
          <span>Release Date</span>
          <input type="number" name="year" defaultValue={movieInfo.releaseYear || ''} onChange={handleInputChange} />
        </label>
        <label className="grid-item movie-form-control">
          <span>Rating</span>
          <input type="number" name="rating" defaultValue={movieInfo.rating || ''} onChange={handleInputChange} />
        </label>
        <label className="grid-item movie-form-control">
          <span>Runtime</span>
          <input type="text" name="runtime" defaultValue={movieInfo.duration || ''} onChange={handleInputChange} />
        </label>
        <label className="grid-item movie-form-control">
          <span>Overview</span>
          <textarea name="runtime" defaultValue={movieInfo.description || ''} onChange={handleInputChange}></textarea>
        </label>
      </div>
      <div className="movie-form-actions">
        <button type="reset" className="secondary">Reset</button>
        <button type="submit" className="primary">Submit</button>
      </div>
    </form>
  );
}

export default MovieForm;