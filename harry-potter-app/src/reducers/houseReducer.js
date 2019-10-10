import { START_FETCHING, FETCH_SUCCESSFUL, FETCH_FAILED } from '../actions';

const initialState = {
  isFetching: false,
  houses: [],
  error: ''
}

export const houseReducer = (state = initialState, action) => {
  switch(action.type) {
    case START_FETCHING :
      return {
        ...state, 
        isFetching: true,
      }
    case FETCH_SUCCESSFUL : 
      return {
        ...state, 
        isFetching: false,
        houses: action.payload
      }
    case FETCH_FAILED : 
      return {
        ...state, 
        isFetching: false,
        error: action.payload
      }
    default: 
      return state;
  }
}