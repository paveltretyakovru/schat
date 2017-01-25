import {
  UPDATE_HEADER_TITLE,
  UPDATE_HEADER_LEFT_ICON,
  UPDATE_HEADER_RIGHT_ICON,
} from './HeaderConstants';

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