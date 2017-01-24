// Libs
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Reducers
import appReducer from './appReducer';
import roomsReducer from '../rooms/roomsReducer';

export default combineReducers({
  // ...reducers,
  app: appReducer,
  room: roomsReducer,
  routing: routerReducer,
})