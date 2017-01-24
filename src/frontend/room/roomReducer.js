import {
    ADD_ROOM,
} from '../constants/rooms';

const initState = [
    {
        id: 'idrooom3242342',
        key: 'somekeymessag',
        title: 'Titile room',
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