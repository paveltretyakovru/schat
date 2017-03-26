import { goBack } from 'react-router-redux';

import {
  ADD_ROOM,
  ADD_MESSAGE,
  ROOMS_ROUTE,
  ADD_ROOM_ROUTE,
} from './rooms.constants';

import { push } from 'react-router-redux';

import makeId from 'makeId';

export function addRoom(data) {
  return dispatch => {
    dispatch({ type: ADD_ROOM, payload: data });
    dispatch(goBack());
  }
}

// Navigation functions
export function routeToAddRoom() {
  return (dispatch) => {
    dispatch(push(ADD_ROOM_ROUTE));
  }
}

export function routeToRooms(indexRoom = '') {
  return (dispatch) => {
    let route = (indexRoom || indexRoom === 0 )
      ? `${ROOMS_ROUTE}/${indexRoom}`
      : ROOMS_ROUTE;
    dispatch(push(route));
  }
}

export function addMessage(message = '') {
  return dispatch => {
    if(message) {
      dispatch({
        type: ADD_MESSAGE,
        payload: {
          id: makeId(),
          me: true,
          message: message,
        },
      });
    }
  }
}