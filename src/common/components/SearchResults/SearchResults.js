import React from 'react'

import styles from './SearchResults.module.scss'
import { Container } from 'common/components/Container/index.js'

export const SearchResults = () => {
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
