import React from 'react'

import { Container } from 'common/components/Container/index.js'
import styles from './Header.module.scss'
// import Container from 'common/components/Container/index.js'

export const Header = () => {

  const handleChange = () => {
    console.log("Hiya!")
  }

  return (
    <header className={styles.header}>
      <Container>
        <ul>
          <li>
            <img src="https://www.grocerygateway.com/store/_ui/responsive/theme-gg/images/gg-logo.svg" alt="Grocery Gateway truck logo" height="59"/>
            <img src="https://www.grocerygateway.com/store/_ui/responsive/theme-gg/images/gg-logo-grocery-gateway.svg" alt="Grocery Gateway" height="59"/>
            <img src="https://www.grocerygateway.com/store/_ui/responsive/theme-gg/images/gg-logo-by-longos.png" alt="By Longos" height="59"/>
          </li>
          <li>
          <input type="search" name="text" value="" maxLength="100" placeholder="I'm looking for..." onChange={handleChange}/>
          <button type="submit">Search</button>
          </li>
          <li>
            Home delivery<br/>
            RESERVE NOW
          </li>
          <li>
            CART
          </li>
        </ul>
      </Container>
    </header>
  )
}
