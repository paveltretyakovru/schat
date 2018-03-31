import {SERVER_HOST} from '../../app.constants'

export const AUTH_ROUTE = '/auth'
export const AUTH_LOGIN = 'AUTH_LOGIN'

export const ENABLE_FINGER = 'ENABLE_FINGER'
export const DISABLE_FINGER = 'DISABLE_FINGER'

export const ENABLE_AUTHENTICATE = 'ENABLE_AUTHENTICATE'

export const CLEAR_LOGIN_DATA = 'CLEAR_LOGIN_DATA'
export const AUTH_LOGIN_ROUTE = '/auth/login'
export const UPDATE_LOGIN_DATA = 'UPDATE_LOGIN_DATA'
export const AUTH_LOGIN_POST_URL = `${SERVER_HOST}/users/login`

export const AUTH_REGISTER_ROUTE = '/auth/register'
export const CLEAR_REGISTER_DATA = 'CLEAR_LOGIN_DATA'
export const UPDATE_REGISTER_DATA = 'UPDATE_LOGIN_DATA'
export const AUTH_REGISTER_POST_URL = `${SERVER_HOST}/users/register`