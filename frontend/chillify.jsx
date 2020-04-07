import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api_util.js';

import Root from './components/root';

import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();

  //////////////// TEST ////////////////////////
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //////////////////////////////////////////////

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});