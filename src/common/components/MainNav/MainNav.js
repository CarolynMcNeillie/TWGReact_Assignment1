import React from 'react'

import styles from './MainNav.module.scss'
// import Container from 'common/components/Container/index.js'

export const MainNav = () => {
  return (
    <nav className={styles.mainnav}>
      <ul>
        <li>Home</li> {/* replace with home button component */}
        <li>Hi USER NAME</li> {/* replace with user greeting component*/}
      </ul>

      <ul> {/* replace with main nav component */}
        <li>My Account</li> 
        <li>Auto Reorder</li>
        <li>My Favourites</li>
        <li>My Lists</li>
        <li>Cart Starters</li>
        <li>Need Help?</li>
      </ul>
    </nav>
  )
}
