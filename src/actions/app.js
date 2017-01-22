import { goBack } from 'react-router-redux';

import {
  UPDATE_HEADER_TITLE,
  UPDATE_HEADER_LEFT_ICON,
  UPDATE_HEADER_RIGHT_ICON,
} from '../constants/app';

export function updateHeaderTitle(title = 'Empty title parameter') {
  return (dispatch) => {
    return dispatch({ type: UPDATE_HEADER_TITLE, payload: title })
  }
}

export function updateHeaderLeftIcon(title = 'menu') {
  return (dispatch) => {
    return dispatch({ type: UPDATE_HEADER_LEFT_ICON, payload: title});
  }
}

export function updateHeaderRightIcon(title = '') {
  return (dispatch) => {
    return dispatch({ type: UPDATE_HEADER_RIGHT_ICON, payload: title })
  }
}

export function routeToBack() {
  return (dispatch) => {
    return dispatch(goBack());
  }
}