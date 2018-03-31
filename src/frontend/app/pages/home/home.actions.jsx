import { push } from 'react-router-redux'

import {
  HOME_ROUTE,
} from './home.constants'

export const routeToHome = () => {
  return (dispatch) => {
    dispatch(push(HOME_ROUTE))
  }
}