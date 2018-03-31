import React from 'react'
import {Route} from 'react-router'
import HomeContainer from './home.container'

export const homeRoutes = (
  <Route path={HomeContainer.path} component={HomeContainer} />
)