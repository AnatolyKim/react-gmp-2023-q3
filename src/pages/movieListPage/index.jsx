import styles from './styles.module.css';
import MovieTile from '../../components/movieTile';
import SortControl from '../../components/sortControl';
import { useEffect, useState } from 'react';
import { useSearchParams, Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import { mapMovieData } from '../../helpers/movie.helper';
import { parseSearchParams } from '../../helpers/utils';
import { v4 as uuid } from 'uuid';

function MovieListPage() {
  const [movies, setMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState('All');
  const [moviesCount, setMoviesCount] = useState(0);
  const genreFilters = [ 'All', 'Comedy', 'Drama', 'Action', 'Romance'];
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const searchQuery = searchParams.get('search') || '';
    const searchSorting = searchParams.get('sortBy') || 'release_date';
    const searchActiveGenre = searchParams.get('filter') || 'All';
    let queryParams = `limit=6&searchBy=title&sortOrder=asc&sortBy=${searchSorting}`;

    if (searchQuery) {
      queryParams = queryParams.concat(`&search=${searchQuery}`);
    }

    if (searchActiveGenre !== 'All') {
      queryParams = queryParams.concat(`&filter=${searchActiveGenre}`);
    }

    setActiveGenre(searchActiveGenre);

    fetch(`http://localhost:4000/movies?${queryParams}`, { signal })
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.data);
        setMoviesCount(res.totalAmount);
      })
      .catch((err) => console.warn(err));
    
    return () => abortController.abort();
  }, [searchParams]);

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.contentRestrict} ${styles.navigation}`}>
          <div className={styles.logo}></div>
          <Routes>
            <Route path=':movieId' element={<button className={styles.search} onClick={() => navigate('')}></button>}></Route>
            <Route path='*' element={<button className={styles.addMovie} onClick={() => navigate('new')}>+ Add Movie</button>}></Route>
          </Routes>
          <Outlet/>
        </div>
      </header>
      <div className={styles.contentRestrict}>
        <div className={styles.filters}>
          <ul className={styles.genres}>
            {genreFilters.map((genre) =>(
              <li className={`${styles.genre} ${activeGenre === genre && styles.active}`} key={uuid()} onClick={() => setSearchParams(parseSearchParams({ filter: genre }, searchParams))}>{genre}</li>
            ))}
          </ul>
          <SortControl currentSelection={'release-date'} onSelectionChange={(sortBy) => setSearchParams(parseSearchParams({ sortBy }, searchParams))}/>
        </div>
        <div className={styles.totalCount}><b>{moviesCount}</b> movies found</div>
        <div className={styles.movieList}>
          {movies.map((movie) => (
            <MovieTile movie={mapMovieData(movie)} key={uuid()} onClick={() => navigate(`${movie.id}`)} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieListPage;
