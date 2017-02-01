import {
    UPDATE_CLOSE_DATA,
} from './button-close.constants';

const initState = {
    data: {
        test: 'data',
    },
}

export default function(state = initState, action) {
    switch(action.type) {
        case UPDATE_CLOSE_DATA:
            return { ...state, data: action.payload };

        default:
            return { ...state };
    }
}
