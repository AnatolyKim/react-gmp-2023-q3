import { v4 as uuid } from 'uuid';

import ContextMenu from '../contextMenu';
import { IMovie } from '../../models/movie.interface';

import styles from './styles.module.css';

type MovieTile = {
  movie: IMovie,
  onClick: (movie: IMovie) => void
}

export default function MovieTile({ movie, onClick }: MovieTile) {
  const { imageUrl, name, releaseYear, genres, id } = movie;

  return (
    <div className={styles.tile} onClick={() => onClick(movie)}>
      <img src={imageUrl} alt={name} />
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
