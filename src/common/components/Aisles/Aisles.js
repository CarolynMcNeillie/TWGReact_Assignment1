import React from 'react'

import { Container } from 'common/components/Container/index.js'
import styles from './Aisles.module.scss'
// import Container from 'common/components/Container/index.js'

export const Aisles = () => {
  const aisles = [
    'Fresh Fruits and Vegetables',
     'Deli',
     'Prepared Foods',
     'Bakery',
     'Fresh Meat and Seafood',
     'Dairy and Eggs',
     'Frozen',
     'Pantry'
  ]
  return (
    <nav className={styles.aisles}>
      <Container>
        <div className={styles.aisles__content}>
          <a href="http://www.google.com">See All Aisles</a>
          <ul className={styles.aisles__list}>
            {aisles.map(aisle => <li className={styles['aisles__list--item']}>{aisle}</li>)}
          </ul>
        </div>
      </Container>
    </nav>
  )
}
