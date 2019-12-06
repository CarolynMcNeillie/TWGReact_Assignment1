import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Accordion } from 'common/components/Accordion/index.js'
import { SearchResults } from 'common/components/SearchResults/index.js'

import { HelloWorldClass } from './HelloWorld'
import { HelloWorldFunctional } from './HelloWorld'
import { PageTemplate } from './PageTemplate'

// High-level routes for the application
// Sub-routes should be nested within components
export const Routes = () => (
  <Switch>
    <Route exact path='/'>
      <HelloWorldClass cheeseburger="cheeseburger" />
      <HelloWorldFunctional hotdog="hotdog bun" isEnabled>
        This is a child thing.
        <Accordion title="Click click!"><p>Hihihihi! Here I am!</p></Accordion>
      </HelloWorldFunctional>
    </Route>
    <Route exact path='/search'>
      <PageTemplate>
        <SearchResults/>
      </PageTemplate>
    </Route>
  </Switch>
)
