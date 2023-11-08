import { v4 as uuid } from 'uuid';

import MovieTile from '../movieTile';
import { IApiMovie } from '../../models/movie.interface';
import { mapMovieData } from '../../helpers/movie.helper';

import styles from './styles.module.css';

type MovieList = {
  movies: IApiMovie[],
  moviesCount: number,
  onTileSelect: (id: string) => void;
}

export default function MovieList({movies, moviesCount, onTileSelect }: MovieList) {
  return (
    <>
      <div className={styles.totalCount}><b>{moviesCount}</b> movies found</div>
      <div className={styles.movieList}>
        {movies.map((movie: IApiMovie) => (
          <MovieTile movie={mapMovieData(movie)} key={uuid()} onClick={() => onTileSelect(`${movie.id}`)} />
        ))}
      </div>
    </>
  );
}