import styles from './styles.module.css';
import SearchForm from './components/searchForm';
import MovieTile from './components/movieTile';
import SortControl from './components/sortControl';
import MovieDetails from './components/movieDetails';
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [sorting, setSorting] = useState('release_date');
  const [activeGenre, setActiveGenre] = useState('All');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [moviesCount, setMoviesCount] = useState(0);
  const genreFilters = [ 'All', 'Comedy', 'Drama', 'Action', 'Romance'];

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    let queryParams = `limit=6&searchBy=title&sortOrder=asc&sortBy=${sorting}`;

    if (query) {
      queryParams = queryParams.concat(`&search=${query}`);
    }

    if (activeGenre !== 'All') {
      queryParams = queryParams.concat(`&filter=${activeGenre}`);
    }

    fetch(`http://localhost:4000/movies?${queryParams}`, { signal })
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.data);
        setMoviesCount(res.totalAmount);
      })
      .catch((err) => console.warn(err));
    
    return () => abortController.abort();
  }, [query, sorting, activeGenre]);

  const mapMovieData = (movie) => {
    const { title, poster_path, vote_average, release_date, overview, genres, runtime } = movie;

    return {
      genres,
      name: title,
      imageUrl: poster_path,
      rating: vote_average,
      releaseYear: release_date.slice(0, 4),
      description: overview,
      duration: runtime,
    }
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={`${styles.contentRestrict} ${styles.navigation}`}>
          <div className={styles.logo}></div>
          {selectedMovie 
            ? <button className={styles.search} onClick={() => setSelectedMovie(null)}></button>
            : <button className={styles.addMovie}>+ Add Movie</button>
          }
          {selectedMovie 
            ? <MovieDetails movie={selectedMovie}></MovieDetails>
            : <div className={styles.searchForm}>
                <h1 className={styles.title}>Find your movie</h1>
                <SearchForm className="search" initialQuery={''} onSearch={(query) => setQuery(query)}/>
              </div>
          }
        </div>
      </header>
      <div className={styles.contentRestrict}>
        <div className={styles.filters}>
          <ul className={styles.genres}>
            {genreFilters.map((genre) =>(
              <li className={`${styles.genre} ${activeGenre === genre && styles.active}`} key={genre} onClick={() => setActiveGenre(genre)}>{genre}</li>
            ))}
          </ul>
          <SortControl currentSelection={'release-date'} onSelectionChange={(sortType) => setSorting(sortType)}/>
        </div>
        <div className={styles.totalCount}><b>{moviesCount}</b> movies found</div>
        <div className={styles.movieList}>
          {movies.map((movie) => (
            <MovieTile movie={mapMovieData(movie)} key={movie.title} onClick={() => setSelectedMovie(mapMovieData(movie))} />
          ))}
        </div>
      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
}

export default App;
