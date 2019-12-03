import React from 'react'

import { Container } from 'common/components/Container/index.js'
import styles from './Aisles.module.scss'
// import Container from 'common/components/Container/index.js'

export const Aisles = () => {
  return (
    <nav className={styles.aisles}>
      <Container>
        <div className={styles.aisles__content}>
          <a href="http://www.google.com">See All Aisles</a>
          <ul>
            <li>Fresh Fruits and Vegetables</li>
            <li>Deli</li>
            <li>Prepared Foods</li>
            <li>Bakery</li>
            <li>Fresh Meat and Seafood</li>
            <li>Dairy and Eggs</li>
            <li>Frozen</li>
            <li>Pantry</li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}
