import React from 'react';
import { Route } from 'react-router';

import RoomsListContainer from './rooms-list/rooms-list.container';
import AddRoomsRoutes from './rooms-add/rooms-add.routes';

export default (
    <Route>
        <Route component={ RoomsListContainer } path={ RoomsListContainer.path } />
        { AddRoomsRoutes }
    </Route>
);
