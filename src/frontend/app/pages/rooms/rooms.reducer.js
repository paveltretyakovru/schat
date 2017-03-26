import {
  ADD_ROOM,
} from './rooms.constants';

const initState = {
  list: [
    {
      id: 'idrooom3242342',
      key: 'somekeymessag',
      title: 'Titile room title',
    },
  ],
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
}

export default function(state = initState, action) {
  switch(action.type) {
  case ADD_ROOM:
    return { ...state, list: [ ...state.list, action.payload ] };

  default:
    return { ...state };
  }
}
