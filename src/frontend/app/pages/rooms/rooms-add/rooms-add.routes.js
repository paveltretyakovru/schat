import React from 'react';
import { Route } from 'react-router';

import AddRoomsContainer from './rooms-add.container';

export default (
    <Route>
        <Route component={ AddRoomsContainer } path={ AddRoomsContainer.path } />
    </Route>
);
