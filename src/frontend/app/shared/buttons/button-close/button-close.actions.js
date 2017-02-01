import {UPDATE_CLOSE_DATA} from './button-close.constants';

export function updateCloseData(data = {}) {
  console.log('Update close data action');

  return (dispatch) => {
    return dispatch({type: UPDATE_CLOSE_DATA, payload: data});
  }
}
