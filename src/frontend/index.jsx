// Modules
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'

import AppContainer from './app/app.container'
// import {appRoutes} from './routes'
import {configureStore} from './configure-store'

const {store, history} = configureStore()

render(
	(
    <Provider store={ store }>
      <ConnectedRouter history={ history }>
        <AppContainer />
      </ConnectedRouter>
    </Provider>
  ),
  document.getElementById('root')
)