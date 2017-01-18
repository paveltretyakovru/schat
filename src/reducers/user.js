import {
  UPDATE_NAME,
} from '../constants/user';

const initState = {
  name: 'default name',
};

export default function(state = initState, action) {

  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload }

    default:
      return state
  }
}
