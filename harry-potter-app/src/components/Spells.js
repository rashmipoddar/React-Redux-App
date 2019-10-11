import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSpells } from '../actions';
import Spell from './Spell';

const Spells = props => {

  useEffect(() => {
    props.fetchSpells();
  }, []);

  return (
    <>
      {props.spells.map(spell => {
        return (
          <Spell key={spell._id} spell={spell}/>
        )
      })}
    </>
  )
}

const mapStateToProps = state => {
  console.log('The spells state is ', state);
  return {
    isFetching: state.spellReducer.isFetching,
    error: state.spellReducer.error,
    spells: state.spellReducer.spells
  }
}

export default connect(mapStateToProps, {fetchSpells})(Spells);