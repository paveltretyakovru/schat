import AES from 'crypto-js/aes';
import {post, get} from 'axios'
// import {isEmpty} from 'ramda'
import {goBack} from 'react-router-redux'

import {
  SHOW_PROGRESS,
  HIDE_PROGRESS,
} from '../../app.constants'

import {
  ADD_ROOM,
  ADD_MESSAGE,
  ROOMS_ROUTE,
  ADD_ROOM_ROUTE,
  SEARCH_ROOM_URL,
  SET_CURRENT_ROOM,
  TOGGLE_ROOM_FAVOR,
  SEND_MESSAGE_ROUTE,
  UPDATE_CONTROL_KEY,
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

export function routeToRooms(room = '') {
  return (dispatch) => {
    let route = (room.id) ? `${ROOMS_ROUTE}/${room.id}` : ROOMS_ROUTE
    console.log('routeToRooms', {room, route});
    
    dispatch(push(route))
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

export const routeToRoomSettings = (roomId = '') => {
  return (dispatch) => {
    try {
      const route = (roomId) ? `${ROOMS_ROUTE}/${roomId}/settings` : ROOMS_ROUTE
      dispatch(push(route))
    } catch (e) {
      console.info('Catch route to rooms list');
    }
  }
}

export const sendMessage = (message = '', room = null) => {
  const encryptedMessage = AES.encrypt(message, room.key)

  return post(
    SEND_MESSAGE_ROUTE,
    {
      roomId: room.id,
      message: encryptedMessage.toString(),
    })
}

export function addMessage(data) {
  return (dispatch) => {
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

export function updateKey(data) {
  return dispatch => {
    dispatch({
      type: UPDATE_CONTROL_KEY,
      payload: {
        roomId: data.roomId || '',
        key: data.key || '',
      },
    });
  }
}

export const toogleRoomFavor = (roomId = '') => {
  return dispatch => {
    dispatch({
      type: TOGGLE_ROOM_FAVOR,
      payload: { roomId },
    })
  }
}

export const setCurrentRoom = (room = false) => {
  if(room) {
    return (dispatch) => {
      dispatch({
        type: SET_CURRENT_ROOM,
        payload: { room },
      })
    }
  }
}

export const searchRoom = (query = '') => {
  return (dispatch) => {
    dispatch({ type: SHOW_PROGRESS })

    return get(`${SEARCH_ROOM_URL}/${query}`)
      .then(() => dispatch({ type: HIDE_PROGRESS }))
  }
}