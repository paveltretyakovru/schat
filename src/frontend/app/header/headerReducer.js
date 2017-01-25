import {
  UPDATE_HEADER_TITLE,
  UPDATE_HEADER_LEFT_ICON,
  UPDATE_HEADER_RIGHT_ICON,
} from './HeaderConstants';

const initState = {
  headerTitle: 'Encrypted chat',
  headerLeftIcon: 'menu',
  headerRightIcon: '',
};

export default function(state = initState, action) {
  switch(action.type) {
    case UPDATE_HEADER_TITLE:
      return { ...state,  headerTitle: action.payload };

    case UPDATE_HEADER_LEFT_ICON:
      return { ...state, headerLeftIcon: action.payload };

    case UPDATE_HEADER_RIGHT_ICON:
      return { ...state, headerRightIcon: action.payload };

    default:
      return state;
  }
}