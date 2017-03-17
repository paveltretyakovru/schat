import { goBack } from 'react-router-redux';

import {
  ADD_ROOM,
  ADD_ROOM_ROUTE,
} from './rooms.constants';

import { push } from 'react-router-redux';

export function routeToAddRoom() {
  return (dispatch) => {
    dispatch(push(ADD_ROOM_ROUTE));
  }
}

export function addRoom(data) {
  return dispatch => {
    dispatch({ type: ADD_ROOM, payload: data });
    dispatch(goBack());
  }
}
