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
          <ul className={styles.aisles__list}>
            <li className={styles.aisles__list_item}>Fresh Fruits and Vegetables</li>
            <li className={styles.aisles__list_item}>Deli</li>
            <li className={styles.aisles__list_item}>Prepared Foods</li>
            <li className={styles.aisles__list_item}>Bakery</li>
            <li className={styles.aisles__list_item}>Fresh Meat and Seafood</li>
            <li className={styles.aisles__list_item}>Dairy and Eggs</li>
            <li className={styles.aisles__list_item}>Frozen</li>
            <li className={styles.aisles__list_item}>Pantry</li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}
