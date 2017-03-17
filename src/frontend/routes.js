import React from 'react';
import { Route, IndexRoute } from 'react-router';

import RoomsRoutes from './app/pages/rooms/rooms.routes';
import AppContainer from './app/app.container';
import RoomsListContainer from './app/pages/rooms/rooms-list/rooms-list.container';
import Page404Component from './app/pages/page-404.component'

export default (
  <Route path={ AppContainer.path } component={ AppContainer }>
      <IndexRoute component={ RoomsListContainer } />
      
      { RoomsRoutes }
      
      <Route path="*" component={ Page404Component } />
  </Route>
);