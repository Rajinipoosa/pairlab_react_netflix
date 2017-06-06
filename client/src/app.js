import React from 'react';
import ReactDOM from 'react-dom';
import NetflixContainer from './containers/NetflixContainer'

window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app');
  ReactDOM.render(<NetflixContainer/>, targetDiv);
});
