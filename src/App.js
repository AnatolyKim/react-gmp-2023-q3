import './App.css';
import Counter from './components/counter/Counter';
import SearchForm from './components/searchForm/SearchForm';
import GenreSelect from './components/genreSelect/GenreSelect';
import MovieTile from './components/movieTile/MovieTile';
import MovieDetails from './components/movieDetails/MovieDetails';
import SortControl from './components/sortControl/SortControl';
import { useState } from 'react';

function App() {
  const [genres] = useState(["action", "comedy", "drama", "horror", "sci-fi"]);
  const [selectedGenre] = useState(genres[0]);
  const movieExample = {
    imageUrl: '../assets/movie-posters/pulp_fiction.png',
    name: 'Pulp Fiction',
    releaseYear: 1994,
    genres: ['Action', 'Adventure'],
    rating: 8.9,
    duration: 154,
    description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny."
  }

  const onSearchSubmit = (query) => {
    console.log(`Search initiated for: ${query}`);
  }

  const onGenreSelect = (genre) => {
    console.log(`Following genre selected: ${genre}`);
  }

  return (
    <div className="app">
      <div className='content-restrict'>
        <Counter count={1}/>
        <SearchForm className="search" initialQuery={''} onSearch={onSearchSubmit}/>
        <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={onGenreSelect} />
        <SortControl currentSelection={'release-date'} onSelectionChange={(sortType) => console.log('Sorting type:', sortType)}/>
        <div className='divider'></div>
        <MovieTile movie={movieExample} onClick={(movie) => console.log('Clicked movie:', movie)} />
        <div className='divider'></div>
        <MovieDetails movie={movieExample} />
      </div>
    </div>
  );
}

export default App;
