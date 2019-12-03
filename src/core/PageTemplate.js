// Class Component
import React from 'react'

import { MainNav } from 'common/components/MainNav/index.js'

// Function Component
export const PageTemplate = ({ children }) => {

  return (
    <>
      <MainNav/>

      <header>
        Header
      </header>

      <nav> {/* componentize for Aisles */}
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

      <main>
        { children }
      </main>

      <aside>
        Sign up for our newsletter.
      </aside>

      <footer>
        Footer
      </footer>
      
    </>
  )
}
