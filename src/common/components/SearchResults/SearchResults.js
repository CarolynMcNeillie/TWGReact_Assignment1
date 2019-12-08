import React from 'react'

import styles from './SearchResults.module.scss'
import { searchResults } from 'tests/fixtures/searchResults.js'
import { Container } from 'common/components/Container/index.js'

export const SearchResults = () => {
  console.log(searchResults)
  return (
    <div className={styles.searchResults}>
      <Container>
        <div>
          Search Results!
        </div>
      </Container>
    </div>
  )
}
