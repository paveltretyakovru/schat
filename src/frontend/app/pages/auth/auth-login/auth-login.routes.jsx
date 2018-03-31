import React from 'react';
import { Route } from 'react-router';

import {AuthLoginComponent} from './auth-login.component'

export default (
  <Route>
    <Route component={ AuthLoginComponent } path={ AuthLoginComponent.path } />
  </Route>
)
