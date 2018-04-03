// import {post} from 'axios'
import {push} from 'react-router-redux'

// import {SERVER_HOST} from '../../app.constants'

import {
  HOME_ROUTE,
} from './home.constants'

export const routeToHome = () => {
  return (dispatch) => {
    dispatch(push(HOME_ROUTE))
  }
}

export const createNewRoom = () => {
  
}