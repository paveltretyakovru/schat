import {
  EXAMPLE_CONSTANT,
} from './AppConstants';

const initState = {
      exampleStateVar: 'hello',
};

export default function(state = initState, action) {
  switch(action.type) {
    case EXAMPLE_CONSTANT:
      return { ...state, headerRightIcon: action.payload };

    default:
      return state;
  }
}