import React from 'react'

import styles from './SearchResults.module.scss'
import { searchResults } from 'tests/fixtures/searchResults.js'
import { Container } from 'common/components/Container/index.js'
import { Result } from 'common/components/Result/index.js'

export const SearchResults = () => {
  console.log(searchResults)
  return (
    <div className={styles.searchResults}>
      <Container>
        <div>
          { searchResults.map(result => {
            console.log(result)
            return (
              <Result 
                key={result.id}
                upc={result.id}
                name={result.name}
                rating={result.rating}
                img={result.img[0]}
                price={result.price}
                unit={result.unit}
                compare={result.compare}
                newprod={result.new}
                sameday={result.sameday}
                pricedrop={result.pricedrop}
              >
              </Result>
            )
          })
          }
        </div>
      </Container>
    </div>
  )
}
