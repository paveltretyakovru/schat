// import {post} from 'axios'
import {push} from 'react-router-redux'

import {dispatchServerRequest} from '../../shared/helpers/dispatch-server-request'
import {HOME_ROUTE} from '../home/home.constants'

import {
  AUTH_ROUTE,
  AUTH_LOGIN,

  ENABLE_FINGER,
  DISABLE_FINGER,

  ENABLE_AUTHENTICATE,
  
  CLEAR_LOGIN_DATA,
  AUTH_LOGIN_ROUTE,
  UPDATE_LOGIN_DATA,
  AUTH_LOGIN_POST_URL,

  CLEAR_REGISTER_DATA,
  AUTH_REGISTER_ROUTE,
  UPDATE_REGISTER_DATA,
  AUTH_REGISTER_POST_URL,
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

export const enableFinger = () => dispatch => dispatch({ type: ENABLE_FINGER })
export const disableFinger = () => dispatch => dispatch({ type: DISABLE_FINGER })

export const submitLogin = (data = {login: '', password: ''}) => {
  const request = dispatchServerRequest({
    url: AUTH_LOGIN_POST_URL,
    data: data,
    method: 'post',
    
    callback: (dispatch, res) => {
      dispatch({type: CLEAR_LOGIN_DATA})
      dispatch({ type: DISABLE_FINGER })

      if (res.data.success) {
        dispatch({type: ENABLE_AUTHENTICATE})
        dispatch(push(HOME_ROUTE))
      }
    },
    
    error: (dispatch, res) => {
      console.log('dispatchServerRequest error result', res)
    },
  })

  return request
}

export const updateLoginData = (data = {login: '', password: ''}) => {
  return (dispatch) => {
    dispatch({type: UPDATE_LOGIN_DATA, payload: data})
  }
}

export const enableAuthenticate = () => {
  return (dispatch) => {
    dispatch({type: ENABLE_AUTHENTICATE})
  }
}

export const clearLoginData = () => {
  return (dispatch) => {
    dispatch({type: CLEAR_LOGIN_DATA})
  }
}

// Register actions
export const routeToAuthRegister = () => {
  return (dispatch) => {
    dispatch(push(AUTH_REGISTER_ROUTE));
  }
}

export const submitRegister = (data = {
  login: '',
  password: '',
  repassword: '',
}) => {  
  const request = dispatchServerRequest({
    url: AUTH_REGISTER_POST_URL,
    data: data,
    method: 'post',
    callbackDispatches: [{type: CLEAR_REGISTER_DATA}, {type: DISABLE_FINGER}],
    successDispatches: [{type: ENABLE_AUTHENTICATE}, () => push(HOME_ROUTE)],
    
    error: (dispatch, res) => {
      console.log('dispatchServerRequest error result', res)
    },
  })

  return request
}

export const updateRegisterData = (
  data = {
    login: '',
    password: '',
    repassword: '',
  }
) => (dispatch) => dispatch({type: UPDATE_REGISTER_DATA, payload: data})

export const clearRegisterData = () => {
  return (dispatch) => {
    dispatch({type: CLEAR_REGISTER_DATA})
  }
}