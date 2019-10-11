import { START_FETCHING_SPELLS, FETCH_SPELLS_SUCCESSFUL, FETCH_SPELLS_FAILED } from '../actions';

const initialState = {
  isFetching: false,
  error: '',
  spells: []
};

export const spellReducer = (state = initialState, action) => {
  switch(action.type) {
    case START_FETCHING_SPELLS :
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_SPELLS_SUCCESSFUL : 
      return {
        ...state, 
        isFetching: false,
        spells: action.payload
      }
    case FETCH_SPELLS_FAILED : 
      return {
        ...state, 
        isFetching: false,
        error: action.payload
      }
    default : 
      return state;
  } 
}