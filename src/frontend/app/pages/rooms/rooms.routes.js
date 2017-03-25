import React from 'react';
import { Route } from 'react-router';

import AddRoomsRoutes from './rooms-add/rooms-add.routes';
import RoomsListRoutes from './rooms-list/rooms-list.routes';
import RoomsShowRoutes from './rooms-show/rooms-show.routes';

export default (
    <Route>
        { RoomsListRoutes }
        { AddRoomsRoutes }
        { RoomsShowRoutes }
    </Route>
);
