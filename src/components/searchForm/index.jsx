import { useState } from 'react';
import styles from './styles.module.css';
import { Outlet, useSearchParams } from  'react-router-dom';
import { parseSearchParams } from '../../helpers/utils';

export default function SearchForm({ initialQuery, onSearch }) {
  const [searchQuery, setSearchQuery] = useState(initialQuery || '');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setSearchParams(parseSearchParams({search: searchQuery}, searchParams));
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
      <Outlet />
    </>
  );
}