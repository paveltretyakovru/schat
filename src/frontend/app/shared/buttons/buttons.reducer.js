import { combineReducers } from 'redux';

import buttonSaveReducer from './button-save/button-save.reducer';
import buttonCloseReducer from './button-close/button-close.reducer';

export default combineReducers({
  save: buttonSaveReducer,
  close: buttonCloseReducer,
});
