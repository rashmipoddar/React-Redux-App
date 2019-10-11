import axios from 'axios';

export const START_FETCHING_SPELLS = 'START_FETCHING_SPELLS_';
export const FETCH_SPELLS_SUCCESSFUL = 'FETCH_SPELLS_SUCCESSFUL';
export const FETCH_SPELLS_FAILED = 'FETCH_SPELLS_FAILED';

export const fetchSpells = () => dispatch => {
  dispatch({type: START_FETCHING_SPELLS});
  axios.get('https://www.potterapi.com/v1/spells?key=$2a$10$XFExJrsEtnbJhi1hbWe5ouAuJ9mxq4qiAwazkndN/UI7Z8q//Iz5q')
    .then(response => {
      console.log(response);
      dispatch({type: FETCH_SPELLS_SUCCESSFUL, payload: response.data});
    })
    .catch(error => {
      console.log(error);
      dispatch({type: FETCH_SPELLS_FAILED, payload: error.data});
    })
}