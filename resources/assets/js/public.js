// Carrega o Jquery
window.$ = window.jQuery = require('jquery');

// jquery do Sass
require('bootstrap-sass');
//require('tether');
//require('bootstrap');

// Imports
import React from 'react'
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

// Template
import PublicAuthentication from './template/PublicAuthentication';

// Body Public
const Index = () => (
  <Router>
    <Route path="/" component={PublicAuthentication}/>
  </Router>
)

ReactDOM.render(<Index />, document.getElementById('public-app'));