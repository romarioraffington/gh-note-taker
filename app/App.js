import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import routes from './config/routes';
import { hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);