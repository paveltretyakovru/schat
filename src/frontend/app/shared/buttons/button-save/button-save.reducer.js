import {
    UPDATE_SAVE_DATA,
} from './button-save.constants';

const initState = {
    data: {
        test: 'data',
    },
}

export default function(state = initState, action) {
    switch(action.type) {
        case UPDATE_SAVE_DATA:
            return { ...state, data: action.payload }
    }
}