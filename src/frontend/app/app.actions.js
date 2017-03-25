import { goBack } from 'react-router-redux';

import {
  SWITCH_LEFT_MENU,
} from './app.constants';

export function routeToBack() {
  return (dispatch) => {
    return dispatch(goBack());
  }
}

export function switchLeftMenu() {
  console.log('Switch menu');
  return dispatch => dispatch({type: SWITCH_LEFT_MENU});
}