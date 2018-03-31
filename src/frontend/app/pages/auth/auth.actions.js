import { push } from 'react-router-redux'

import {
  AUTH_ROUTE,
  AUTH_LOGIN,
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