import axios from 'axios';

export const START_FETCHING_HOUSES = 'START_FETCHING_HOUSES';
export const FETCH_HOUSES_SUCCESSFUL = 'FETCH_HOUSES_SUCCESSFUL';
export const FETCH_HOUSES_FAILED = 'FETCH_HOUSES_FAILED';

export const fetchHouses = () => dispatch => {
  dispatch({type: START_FETCHING_HOUSES});

  axios.get('https://www.potterapi.com/v1/houses?key=$2a$10$XFExJrsEtnbJhi1hbWe5ouAuJ9mxq4qiAwazkndN/UI7Z8q//Iz5q')
    .then(response => {
      // console.log(response);
      dispatch({type: FETCH_HOUSES_SUCCESSFUL, payload: response.data});
    })
    .catch(error => {
      // console.log(error);
      dispatch({type: FETCH_HOUSES_FAILED, payload: error });
    })
}

