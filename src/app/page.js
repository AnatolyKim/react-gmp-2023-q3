import styles from './page.module.css';
import MovieTile from './components/movieTile';
import SortControl from './components/sortControl';
import { mapMovieData } from './helpers/movie.helper';
import { v4 as uuid } from 'uuid';
import HeaderWidget from './components/headerWidget';
import Link from 'next/link';

async function MoviesPage({ searchParams }) {
  const { filter } = searchParams || {};
  const activeGenre = filter || 'All'
  const response = await fetch(`http://localhost:4000/movies?${buildParams()}`);
  const payload = await response.json();
  const movies = payload.data;
  const moviesCount = payload.totalAmount;
  const genreFilters = [ 'All', 'Comedy', 'Drama', 'Action', 'Romance'];

  function buildParams() {
    const { search, sortBy, filter } = searchParams || {};
    const searchQuery = search || '';
    const searchSorting = sortBy || 'release_date';
    const searchActiveGenre = filter || 'All';
    let queryParams = `limit=6&searchBy=title&sortOrder=asc&sortBy=${searchSorting}`;

    if (searchQuery) {
      queryParams = queryParams.concat(`&search=${searchQuery}`);
    }

    if (searchActiveGenre !== 'All') {
      queryParams = queryParams.concat(`&filter=${searchActiveGenre}`);
    }

    return queryParams;
  }

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.contentRestrict} ${styles.navigation}`}>
          <div className={styles.logo}></div>
          <HeaderWidget />
        </div>
      </header>
      <div className={styles.contentRestrict}>
        <div className={styles.filters}>
          <ul className={styles.genres}>
            {genreFilters.map((genre) =>(
              <li className={`${styles.genre} ${activeGenre === genre && styles.active}`} key={uuid()}>{genre}</li>
            ))}
          </ul>
          <SortControl currentSelection={'release-date'}/>
        </div>
        <div className={styles.totalCount}><b>{moviesCount}</b> movies found</div>
        <div className={styles.movieList}>
          {movies.map((movie) => (
            <Link href={movie.id.toString()} key={uuid()}>
              <MovieTile movie={mapMovieData(movie)} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default MoviesPage;
