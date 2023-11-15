import { useState } from 'react';
import styles from './styles.module.css';

export default function SearchForm({ initialQuery, onSearch }) {
  const [searchQuery, setSearchQuery] = useState(initialQuery || '');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    onSearch(searchQuery);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.header}>Find your movie</h1>
        <div className={styles.controls}>
          <input 
            type="text" 
            defaultValue={searchQuery} 
            onChange={handleChange} 
            placeholder="What do you want to watch?" 
            className={styles.input}
          />
          <input type="submit" value="Submit" className={styles.submit}/>
        </div>
      </form>
    </>
  );
}