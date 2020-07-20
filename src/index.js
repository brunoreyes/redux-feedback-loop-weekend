import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

// Redux Imports
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';


// the feedbackReducer:
// - takes in the action.type of set_feedback
// - console.logs that I am in it, and what's being received
// - 'return [...state, action.payload]' spreads everything in the state and puts them
// into individual elements, the object(action.payload) into the empty array of state
// - otherwise, if action.type doesn't equal set feedback, return state with nothing added to it
// - IMPORTANT: Remember not to push into the array.
//   for React / Redux to recognize the changes we need to return a new object.
const feedbackReducer = (state = {}, action) => {
  if (action.type === 'SET_FEEDBACK') {
    console.log('in feedbackReducer', state, action.payload);
    // return [...state, action.payload];

    //In Object.assign I am bringing together all the elements from each page
    //  and merging all of them into one object
    return Object.assign(state, action.payload);
  } else if (action.type === 'RESET_FEEDBACK') {
    return {};
  }
  return state;
};

// storeInstance is the big JavaScript Object that holds all of the information for our application
// by combining all reducers into one Object
const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
  }),
  applyMiddleware(logger)
);

// In ReactDom.Render, it's important to remember to wrap <App /> in a Provider,
// doing so, makes Redux available in our entire application
ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
// I made sure to wrap add in a provider
