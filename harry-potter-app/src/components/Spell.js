import React from 'react';

const Spell = props => {
  return (
    <div>
      <h1>{props.spell.spell}</h1>
      <h1>{props.spell.effect}</h1>
      <h1>{props.spell.type}</h1>
    </div>
  )
}

export default Spell;