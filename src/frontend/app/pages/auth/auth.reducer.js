import {
  AUTH_LOGIN,
  ENABLE_FINGER,
  DISABLE_FINGER,
  ENABLE_AUTHENTICATE,

  CLEAR_LOGIN_DATA,
  UPDATE_LOGIN_DATA,

  CLEAR_REGISTER_DATA,
  UPDATE_REGISTER_DATA,
} from './auth.constants'

const initState = {
  login: '',
  loginForm: { login: '', password: '' },
  registerForm: { login: '', password: '', repassword: '' },
  authenticated: false,
  fingerEnabled: false,
}

export const authReducer = (state = initState, action) => {

  switch(action.type) {
    case AUTH_LOGIN: { return { ...state, login: action.payload.login || '' } }

    case ENABLE_FINGER: { return { ...state, fingerEnabled: true } }

    case DISABLE_FINGER: { return { ...state, fingerEnabled: false } }
    case ENABLE_AUTHENTICATE: { return { ...state, authenticated: true }}
    case UPDATE_LOGIN_DATA: { return { ...state, loginForm: action.payload } }

    case CLEAR_LOGIN_DATA: { return { ...state, loginForm: { login: '', password: '' }} }
    case UPDATE_REGISTER_DATA: { return { ...state, registerForm: action.payload } }
    case CLEAR_REGISTER_DATA: { return { ...state, registerForm: { login: '', password: '', repassword: '' }} }

    default: return { ...state }
  }
}
