import {AUTH_LOGIN} from './auth.constants'

const initState = {
  login: '',
  authenticated: false,
}

export const authReducer = (state = initState, action) => {
  switch(action.type) {

  case AUTH_LOGIN: {
    return { ...state, login: action.payload.login || '' }
  }

  default:
    return { ...state }

  }
}
