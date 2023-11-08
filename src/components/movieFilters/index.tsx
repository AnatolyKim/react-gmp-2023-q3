import { v4 as uuid } from 'uuid';

import SortControl from '../sortControl';
import { FILTERS } from '../../constants/constants';

import styles from './styles.module.css';

type MovieFilters = {
  activeGenre: string,
  onGenreSelect: (query: string) => void;
  onSortingSelect: (sort: string) => void;
}

export default function MovieFilters({ activeGenre, onGenreSelect, onSortingSelect }: MovieFilters) {
  return (
    <>
      <div className={styles.filters}>
        <ul className={styles.genres}>
          {FILTERS.map((genre) =>(
            <li className={`${styles.genre} ${activeGenre === genre && styles.active}`} key={uuid()} onClick={() => onGenreSelect(genre)}>{genre}</li>
          ))}
        </ul>
        <SortControl currentSelection={'release-date'} onSelectionChange={(sortBy: string) => onSortingSelect(sortBy)}/>
      </div>
    </>
  );
}