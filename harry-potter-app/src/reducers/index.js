
import { combineReducers } from 'redux';

import { houseReducer } from './houseReducer'; 
import { spellReducer } from './spellReducer';

export default combineReducers ({
  houseReducer,
  spellReducer
});
