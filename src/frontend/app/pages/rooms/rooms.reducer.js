import {
    ADD_ROOM,
} from './rooms.constants';

const initState = [
    {
        id: 'idrooom3242342',
        key: 'somekeymessag',
        title: 'Titile room title',
    },
];

export default function(state = initState, action) {
    switch(action.type) {
        case ADD_ROOM:
            return { ...state };
        
        default:
            return { ...state };
    }
}