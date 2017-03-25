import React from 'react';
import { Route } from 'react-router';

import RoomsShowContainer from './rooms-show.container';

export default (
    <Route>
        <Route component={ RoomsShowContainer } path={ RoomsShowContainer.path } />
    </Route>
);
