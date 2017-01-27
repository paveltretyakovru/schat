import { goBack } from 'react-router-redux';

export function routeToBack() {
  return (dispatch) => {
    return dispatch(goBack());
  }
}