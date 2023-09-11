import './App.css';
import Counter from './components/counter/Counter';
import SearchForm from './components/searchForm/SearchForm';
import GenreSelect from './components/genreSelect/GenreSelect';
import { useState } from 'react';

function App() {
  const [genres] = useState(["action", "comedy", "drama", "horror", "sci-fi"]);
  const [selectedGenre] = useState(genres[0]);

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
      </div>
    </div>
  );
}

export default App;
