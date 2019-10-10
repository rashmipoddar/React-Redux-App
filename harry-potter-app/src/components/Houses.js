import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchHouses } from '../actions';
import House from './House';

const Houses = (props) => {

  useEffect(() => {
    props.fetchHouses();
  }, [])

  return (
    <House />
  )
}

const mapStateToProps = state => {
  // console.log('The state in houses is', state);
  return {
    houses: state.houseReducer.houses,
    isFetching: state.houseReducer.isFetching,
    error: state.houseReducer.error
  }
}


export default connect(mapStateToProps, {fetchHouses})(Houses);