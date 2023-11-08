import { useSearchParams, Route, Routes, useNavigate, Outlet } from 'react-router-dom';


import MovieFilters from '../../components/movieFilters';
import MovieList from '../../components/movieList';
import { parseSearchParams } from '../../helpers/utils';
import useMoviesApi from '../../hooks/useMoviesApi';

import styles from './styles.module.css';

function MovieListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { movies, moviesCount, activeGenre } = useMoviesApi(searchParams);
  const navigate = useNavigate();

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
        <MovieFilters 
          activeGenre={activeGenre} 
          onGenreSelect={(genre) => setSearchParams(parseSearchParams({ filter: genre }, searchParams))} 
          onSortingSelect={(sortBy: string) => setSearchParams(parseSearchParams({ sortBy }, searchParams))}
        />
        <MovieList movies={movies} moviesCount={moviesCount} onTileSelect={(id) => navigate(`${id}`)} />
      </div>
    </>
  );
}

export default MovieListPage;
