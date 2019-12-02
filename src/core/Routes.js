import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { HelloWorldClass } from './HelloWorld'
import { HelloWorldFunctional } from './HelloWorld'

// High-level routes for the application
// Sub-routes should be nested within components
export const Routes = () => (
  <Switch>
    <Route exact path='/'>
      <HelloWorldClass cheeseburger="cheeseburger" />
      <HelloWorldFunctional hotdog="hotdog bun" isEnabled={false}>
        This is a child thing.
      </HelloWorldFunctional>
    </Route>
  </Switch>
)
