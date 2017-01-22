import {
  UPDATE_HEADER_TITLE,
  UPDATE_HEADER_LEFT_ICON,
} from '../constants/app';

const initState = {
  headerTitle: 'Encrypted chat',
  headerLeftIcon: 'menu',
};

export default function(state = initState, action) {
  switch(action.type) {
    case UPDATE_HEADER_TITLE:
      return { ...state,  headerTitle: action.payload };

    case UPDATE_HEADER_LEFT_ICON:
      return { ...state, headerLeftIcon: action.payload };

    default:
      return state;
  }
}