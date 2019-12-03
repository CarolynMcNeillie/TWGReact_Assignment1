// Class Component
import React from 'react'

import { MainNav } from 'common/components/MainNav/index.js'
import { Header } from 'common/components/Header/index.js'
import { Aisles } from 'common/components/Aisles/index.js'

// Function Component
export const PageTemplate = ({ children }) => {

  return (
    <>
      <MainNav/>
      <Header/>
      <Aisles/>

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
