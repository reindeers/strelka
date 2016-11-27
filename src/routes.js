// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import MainContainer from './containers/MainContainer';

const routes = (
  <Route path="/" component={MainContainer}>
  </Route>
);

export default routes;
