import React from 'react'
import {Route} from 'react-router'

import AuthContainer from './auth.container'

export const authRoutes = (
  <Route exact path={AuthContainer.path} component={AuthContainer} />
)