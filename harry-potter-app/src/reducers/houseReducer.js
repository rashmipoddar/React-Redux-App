import { START_FETCHING_HOUSES, FETCH_HOUSES_SUCCESSFUL, FETCH_HOUSES_FAILED } from '../actions';

const initialState = {
  isFetching: false,
  houses: [],
  error: ''
}

export const houseReducer = (state = initialState, action) => {
  switch(action.type) {
    case START_FETCHING_HOUSES :
      return {
        ...state, 
        isFetching: true,
      }
    case FETCH_HOUSES_SUCCESSFUL : 
      return {
        ...state, 
        isFetching: false,
        houses: action.payload
      }
    case FETCH_HOUSES_FAILED : 
      return {
        ...state, 
        isFetching: false,
        error: action.payload
      }
    default: 
      return state;
  }
}