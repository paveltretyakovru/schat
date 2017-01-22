import {
  UPDATE_HEADER_TITLE,
} from '../constants/app';

export function updateHeaderTitle(title = 'Empty title parameter') {
  return (dispatch) => {
    return dispatch({ type: UPDATE_HEADER_TITLE, payload: title })
  }
}