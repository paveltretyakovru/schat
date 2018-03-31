import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AuthRoutes from './app/pages/auth/auth.routes'
import RoomsRoutes from './app/pages/rooms/rooms.routes'

import AppContainer from './app/app.container'
import HomeContainer from './app/pages/home/home.container'
import Page404Component from './app/pages/page-404.component'

export default (
  <Route path={ AppContainer.path } component={ AppContainer }>
      <IndexRoute component={ HomeContainer } />
      
      { AuthRoutes }
      { RoomsRoutes }
      
      <Route path="*" component={ Page404Component } />
  </Route>
)