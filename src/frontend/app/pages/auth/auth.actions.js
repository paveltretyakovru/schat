import { push } from 'react-router-redux'

import {
  AUTH_ROUTE,
  AUTH_LOGIN,
  AUTH_LOGIN_ROUTE,
} from './auth.constants'

export const login = (data = {login: '', password: ''}) => {
  return (dispatch) => {
    dispatch({
      type: AUTH_LOGIN,
      payload: data,
    })
  }
}

export const routeToAuth = () => {
  return (dispatch) => {
    dispatch(push(AUTH_ROUTE));
  }
}

export const routeToAuthLogin = () => {
  return (dispatch) => {
    dispatch(push(AUTH_LOGIN_ROUTE));
  }
}