import {UPDATE_SAVE_DATA} from './button-save.constants';

export function updateSaveData(data = {}) {
  return (dispatch) => {
    return dispatch({type: UPDATE_SAVE_DATA, payload: data});
  }
}