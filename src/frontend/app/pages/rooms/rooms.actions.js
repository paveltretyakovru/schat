import {
  ADD_ROOM,
  ADD_ROOM_ROUTE,
} from './rooms.constants';

import { push } from 'react-router-redux';

export function routeToAddRoom() {
  return (dispatch) => {
    console.log('Dispatch route to add room');
    dispatch(push(ADD_ROOM_ROUTE));
  }
}

export function addRoom(data) {
  return dispatch => {
    return dispatch({
      type: ADD_ROOM,
      payload: data,
    })
  }
}
