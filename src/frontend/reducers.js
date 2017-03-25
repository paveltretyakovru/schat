// Libs
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Reducers
import appReducer from './app/app.reducer';
import roomsReducer from './app/pages/rooms/rooms.reducer';
import headerReducer from './app/shared/header/header.reducer';

export default combineReducers({
  // ...reducers,
  app: appReducer,
  rooms: roomsReducer,
  header: headerReducer,
  routing: routerReducer,
})
