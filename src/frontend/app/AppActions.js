import { goBack } from 'react-router-redux';

import {
  EXAMPLE_CONSTANT,
} from './AppConstants';

export function exampleAction() {
  return (dispatch) => {
    return dispatch({ type: EXAMPLE_CONSTANT, payload: 'example payload' });
  }
}

export function routeToBack() {
  return (dispatch) => {
    return dispatch(goBack());
  }
}