// Libs
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

// Reducers
import appReducer from './app/app.reducer'
import roomsReducer from './app/pages/rooms/rooms.reducer'
import {authReducer} from './app/pages/auth/auth.reducer'
import headerReducer from './app/shared/header/header.reducer'

export default combineReducers(
  {
    // ...reducers,
    routerReducer,
    app: appReducer,
    auth: authReducer,
    rooms: roomsReducer,
    header: headerReducer,
  },
)
