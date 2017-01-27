import React from 'react';
import { Route } from 'react-router';

import RoomsContainer from './rooms.container';
import AddRoomsRoutes from './rooms-add/rooms-add.routes';

export default (
    <Route>
        <Route component={ RoomsContainer } path={ RoomsContainer.path } />
        { AddRoomsRoutes }
    </Route>
);
