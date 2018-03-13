import { goBack } from 'react-router-redux';

import {
  ADD_ROOM,
  ADD_MESSAGE,
  ROOMS_ROUTE,
  ADD_ROOM_ROUTE,
  UPDATE_CONTROL_KEY,
} from './rooms.constants';

import { push } from 'react-router-redux';

import makeId from 'makeId';

export function addRoom(data) {
  console.log('ADD ROOM', data);
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

export function routeToRooms(room = '') {
  return (dispatch) => {
    let route = (room.id) ? `${ROOMS_ROUTE}/${room.id}` : ROOMS_ROUTE;
    dispatch(push(route));
  }
}

export const routeToRoomsList = () => {
  return (dispatch) => {
    try {
      dispatch(push(ROOMS_ROUTE));
    } catch (e) {
      console.info('Catch route to rooms list');
    }
  }
}

export function addMessage(data) {
  return dispatch => {
    if(data.message) {
      dispatch({
        type: ADD_MESSAGE,
        payload: {
          id: makeId(),
          me: true,
          roomId: data.roomId,
          message: data.message,
        },
      });
    }
  }
}

export function updateControlKey(data) {
  return dispatch => {
    dispatch({
      type: UPDATE_CONTROL_KEY,
      payload: {
        roomId: data.roomId || '',
        controlKey: data.controlKey || '',
      },
    });
  }
}