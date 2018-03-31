import React from 'react'
import {Route} from 'react-router'

import AuthContainer from './auth.container'
import AuthLoginRoutes from './auth-login/auth-login.routes'

export default (
  <Route path={AuthContainer.path} component={AuthContainer}>
    { AuthLoginRoutes }
  </Route>
)