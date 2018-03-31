import {AUTH_LOGIN} from './auth.constants'

const initState = {
  authenticated: false,
}

export const authReducer = (state = initState, action) {
  switch(action.type) {
    case AUTH_LOGIN: {
      return { ...state }
    }
  }
}