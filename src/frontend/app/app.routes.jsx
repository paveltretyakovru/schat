import React from 'react'
import {Route, Switch} from 'react-router'

import {AuthRoutes} from '../routes'
import HomeContainer from './pages/home/home.container'

console.log('Home path', HomeContainer.path)

export const appRoutes = (
  <Switch>
    <Route exact path={HomeContainer.path} component={HomeContainer} />
    {AuthRoutes}
  </Switch>
)