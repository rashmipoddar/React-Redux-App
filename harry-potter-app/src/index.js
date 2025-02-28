import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

import combineReducers from './reducers';

import App from './App';

const store = createStore(combineReducers, applyMiddleware(thunk, logger));
// console.log('The store is ', store);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

