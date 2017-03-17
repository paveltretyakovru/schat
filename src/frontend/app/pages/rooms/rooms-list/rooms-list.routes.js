import React from 'react';
import { Route } from 'react-router';

import RoomsListContainer from './rooms-list.container';

export default (
    <Route>
        <Route component={ RoomsListContainer } path={ RoomsListContainer.path } />
    </Route>
);
