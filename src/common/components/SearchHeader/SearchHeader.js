import React from 'react'

import styles from './SearchHeader.module.scss'

export const SearchHeader = ({ resultCount, searchTerm }) => (
  <h1 className={styles.searchHeader}>
    <span className={styles.searchHeader__count}>{resultCount} </span> 
    results for
    "<span className={styles.searchHeader__term}>{searchTerm}</span>"
  </h1>
)
