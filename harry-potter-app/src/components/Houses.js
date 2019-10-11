import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchHouses } from '../actions';
import House from './House';

const Houses = (props) => {

  useEffect(() => {
    props.fetchHouses();
  }, [])

  return (
    <>
      {props.isFetching && <p>Loading......</p>}
      <div className='houses'>
        {props.houses.map(house => {
          return (
            <House key={house._id} house={house} />
          )
        })}
      </div>
    </>
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