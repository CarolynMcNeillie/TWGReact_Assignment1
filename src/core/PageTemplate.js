// Class Component
import React from 'react'

import { TemplateHeader } from 'common/components/TemplateHeader/index.js'
import { TemplateFooter } from 'common/components/TemplateFooter/index.js'

// Function Component
export const PageTemplate = ({ children }) => {

  return (
    <>
      <TemplateHeader/>

      <main>
        { children }
      </main>

      <TemplateFooter/>
    </>
  )
}
