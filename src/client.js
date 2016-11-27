import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './containers/AppRoutes';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};
