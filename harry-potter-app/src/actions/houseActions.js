import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL';
export const FETCH_FAILED = 'FETCH_FAILED';

export const fetchHouses = () => dispatch => {
  dispatch({type: START_FETCHING});

  axios.get('https://www.potterapi.com/v1/houses?key=$2a$10$XFExJrsEtnbJhi1hbWe5ouAuJ9mxq4qiAwazkndN/UI7Z8q//Iz5q')
    .then(response => {
      // console.log(response);
      dispatch({type: FETCH_SUCCESSFUL, payload: response.data});
    })
    .catch(error => {
      // console.log(error);
      dispatch({type: FETCH_FAILED, payload: error });
    })
}

