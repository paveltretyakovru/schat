import { push } from 'react-router-redux'

import {
  HOME_ROUTE,
} from './home.constants'

export const stub = (dispatch) => dispatch({type: ''})

export const routeToHome = () => {
  return (dispatch) => {
    dispatch(push(HOME_ROUTE))
  }
}