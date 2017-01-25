// Libs
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Reducers
import appReducer from './appReducer';
import roomsReducer from '../rooms/roomsReducer';
import headerReducer from './header/headerReducer';

export default combineReducers({
  // ...reducers,
  app: appReducer,
  room: roomsReducer,
  header: headerReducer,
  routing: routerReducer,
})