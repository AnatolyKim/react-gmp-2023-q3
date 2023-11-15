"use client"

import React from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import SearchForm from '../searchForm';

function HeaderWidget() {
  const router = useRouter();
  const button = router.pathname === ':movieId'
    ? <button className={styles.search} onClick={() => router.push('')}></button>
    : <button className={styles.addMovie} onClick={() => router.push('new')}>+ Add Movie</button>;

  return(
    <>
      {button}
      <SearchForm />
    </>
  )
}

export default HeaderWidget;