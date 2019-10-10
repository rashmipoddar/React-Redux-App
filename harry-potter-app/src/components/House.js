import React from 'react';

const House = props => {
  return (
    <div className='house'>
      <h1>House: {props.house.name}</h1>
      <h2>Mascot: {props.house.mascot}</h2>
      <h2>House Head: {props.house.headOfHouse}</h2>
      <h2>House Ghost: {props.house.houseGhost}</h2>
      <h2>Founder: {props.house.founder}</h2>
    </div>
  )
}

export default House;