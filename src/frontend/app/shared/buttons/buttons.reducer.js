import { combineReducers } from 'redux';

import buttonSaveReducer from './button-save/button-save.reducer';

export default combineReducers({
  save: buttonSaveReducer,
});