import {SERVER_HOST} from '../../app.constants'

export const ADD_ROOM = 'ADD_ROOM'

export const ROOMS_ROUTE = '/rooms'
export const SEARCH_ROOM_URL = `${SERVER_HOST}/rooms`
export const ADD_ROOM_ROUTE = '/rooms/add'
export const SET_CURRENT_ROOM = 'SET_CURRENT_ROOM'
export const TOGGLE_ROOM_FAVOR = 'TOGGLE_ROOM_FAVOR'

export const UPDATE_CONTROL_KEY = 'UPDATE_CONTROL_KEY'

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const SEND_MESSAGE_ROUTE = `${SERVER_HOST}/messages`