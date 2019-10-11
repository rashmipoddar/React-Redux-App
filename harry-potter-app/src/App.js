import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Houses from './components/Houses';
import Spells from './components/Spells';
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>Hogwarts School of Witchcraft and Wizardry</h1>
      <Route path='/' component={Navigation} />
      <Route path='/houses' component={Houses} />
      <Route path='/spells' component={Spells} />
    </div>
  );
}

export default App;
