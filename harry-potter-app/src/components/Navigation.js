import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navigation'>
      <Link to='/'>Home</Link>
      <Link to='/houses'>Houses</Link>
      <Link to='/spells'>Spells</Link>
      <p>Welcome to Hogwarts School of Witchcraft and Wizardry. Its a school of magic where children are taught to be witches and wizards. </p>
    </div>
  )
}

export default Navigation;