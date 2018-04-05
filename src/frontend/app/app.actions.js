import { goBack } from 'react-router-redux';

import {
  SWITCH_LEFT_MENU,
  UPDATE_HEADER_TITLE,
  UPDATE_SNACK_MESSAGE,
} from './app.constants';

export function routeToBack() {
  return (dispatch) => {
    return dispatch(goBack());
  }
}

export function switchLeftMenu() {
  return dispatch => dispatch({type: SWITCH_LEFT_MENU});
}

export const updateHeaderTitle = (title = 'Encrypted chat') => {
  return dispatch => dispatch({type: UPDATE_HEADER_TITLE, payload: title})
}

export const updateSnackMessage = (message = '') => {
  return dispatch => dispatch({type: UPDATE_SNACK_MESSAGE, payload: message})
}