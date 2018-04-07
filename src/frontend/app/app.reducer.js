import io from 'socket.io-client';

import {
  HIDE_PROGRESS,
  SHOW_PROGRESS,
  SWITCH_LEFT_MENU,
  UPDATE_HEADER_TITLE,
  UPDATE_SNACK_MESSAGE,
} from './app.constants';

const socket = io.connect('http://localhost:3002')

const initState = {
  socket,
  headerTitle: 'Encrypted chat',
  showProgress: false,
  snackMessage: '',
  isLeftMenuOpen: false,
}

export default function(state = initState, action) {
  switch(action.type) {
    case SWITCH_LEFT_MENU: {
      return { ...state, isLeftMenuOpen: !state.isLeftMenuOpen }
    }
      
    case SHOW_PROGRESS: {
      return { ...state, showProgress: true }
    }

    case HIDE_PROGRESS: {
      return { ...state, showProgress: false }
    }

    case UPDATE_HEADER_TITLE: {
      return { ...state, headerTitle: action.payload || ''}
    }

    case UPDATE_SNACK_MESSAGE: {
      return { ...state, snackMessage: action.payload || '' }
    }

    default:
      return { ...state };
  }
}
