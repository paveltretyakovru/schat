import {
  UPDATE_NAME,
} from '../constants/user';

// -----------------------------------------------------------------------------

export function updateName() {
  return {
    type: UPDATE_NAME,
    payload: 'Pavel',
  };
}