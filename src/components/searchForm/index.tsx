import { ChangeEvent, FormEvent, useState } from 'react';
import { Outlet, useSearchParams } from  'react-router-dom';

import { parseSearchParams } from '../../helpers/utils';

import styles from './styles.module.css';

type SearchForm = {
  initialQuery: string,
  onSearch: (query: string) => void
}

export default function SearchForm({ initialQuery, onSearch }: SearchForm) {
  const [searchQuery, setSearchQuery] = useState(initialQuery || '');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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