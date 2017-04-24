// Carrega o Jquery
window.$ = window.jQuery = require('jquery');

// jquery do Sass
require('bootstrap-sass');
//require('tether');
//require('bootstrap');

// Class Javacsript

// Imports
import React from 'react'
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

// Template
import PrivateIndex from './template/PrivateIndex';

// Body Public
const Index = () => (
  <Router>
    <Route path="/private" component={PrivateIndex}/>
  </Router>
)

ReactDOM.render(<Index />, document.getElementById('private-app'));