import { useState } from 'react';
import './SearchForm.css';

export default function SearchForm({ initialQuery, onSearch }) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    onSearch(searchQuery);
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchQuery(event.target.value);
      handleSubmit(event);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input 
        type="text" 
        defaultValue={searchQuery} 
        onChange={handleChange} 
        onKeyDown={handleKeyPress}
        placeholder="What do you want to watch?" 
        className="search-input"
      />
      <input type="submit" value="Submit" className="submit"/>
    </form>
  );
}