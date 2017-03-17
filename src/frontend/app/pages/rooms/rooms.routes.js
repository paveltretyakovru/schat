import React from 'react';
import { Route } from 'react-router';

import AddRoomsRoutes from './rooms-add/rooms-add.routes';
import RoomsListRoutes from './rooms-list/rooms-list.routes';

export default (
    <Route>
        { RoomsListRoutes }
        { AddRoomsRoutes }
    </Route>
);
