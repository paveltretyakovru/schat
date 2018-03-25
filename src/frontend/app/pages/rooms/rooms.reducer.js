import makeId from 'makeId';
import AES from 'crypto-js/aes';
import SHA256 from 'crypto-js/sha256';

import {
  ADD_ROOM,
  ADD_MESSAGE,
  TOGGLE_ROOM_FAVOR,
  UPDATE_CONTROL_KEY,
} from './rooms.constants';

const initState = {
  list: [
    {
      id: 'idrooom3242342',
      key: SHA256('key').toString(),
      title: 'Titile room title',
      favor: false,
      controlKey: '',
      
      messages: [],
      
    },
  ],
}

export default function(state = initState, action) {
  switch(action.type) {
  case ADD_ROOM:
    return {
      ...state,
      list: [
        ...state.list,
        {
          id: makeId(),
          key: SHA256(action.payload.key).toString(),
          title: action.payload.title,
          messages: [],
          controlKey: '',
        },
      ],
    };
  
  case ADD_MESSAGE: {
    let roomsListCopy = state.list.slice();
    let findRoom = roomsListCopy.find(element => {
      return element.id === action.payload.roomId;
    });

    let encryptedMessage = AES.encrypt(action.payload.message, findRoom.key);

    findRoom.messages.push({
      id: action.payload.id,
      me: action.payload.me,
      message: encryptedMessage.toString(),
    });
    return { ...state, list: roomsListCopy};
  }

  case UPDATE_CONTROL_KEY: {
    let roomsListCopy = state.list.slice();
    let findRoom = roomsListCopy.find(element => {
      return element.id === action.payload.roomId;
    });

    findRoom.controlKey = SHA256(action.payload.controlKey).toString();
    return {...state, list: roomsListCopy}
  }

  case TOGGLE_ROOM_FAVOR: {
    const roomsListCopy = state.list.slice();
    const findRoom = roomsListCopy.find(element => {
      return element.id === action.payload.roomId;
    });

    findRoom.favor = !findRoom.favor

    return {...state, list: roomsListCopy, current: findRoom}
  }

  default:
    return { ...state };
  }
}
