import makeId from 'makeId';

import {
  ADD_ROOM,
  ADD_MESSAGE,
} from './rooms.constants';

const initState = {
  list: [
    {
      id: 'idrooom3242342',
      key: 'somekeymessag',
      title: 'Titile room title',
      
      messages: [
        {
          id: 'aslerjfsdklfjwe123',
          me: true,
          message: 'Hello my friend',
        },
        {
          id: 'aslerjfsdklfjwe',
          me: false,
          message: 'Hi! How are you?',
        },
      ],

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
          ...action.payload,
          id: makeId(),
          messages: [],
        },
      ],
    };
  
  case ADD_MESSAGE:{
    let roomsListCopy = state.list.slice();
    let findRoom = roomsListCopy.find((element) => {
      return element.id === action.payload.roomId;
    });

    findRoom.messages.push({
      id: action.payload.id,
      me: action.payload.me,
      message: action.payload.message,
    });
    return { ...state, list: roomsListCopy};
  }

  default:
    return { ...state };
  }
}
