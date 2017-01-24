import {
  ADD_ROOM_ROUTE,
} from './RoomsConstants';

import { push } from 'react-router-redux';

export function routeToAddRoom() {
  return (dispatch) => {
    console.log('Dispatch route to add room');
    dispatch(push(ADD_ROOM_ROUTE));
  }
}