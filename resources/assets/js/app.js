// Carrega o Jquery
window.$ = window.jQuery = require('jquery');

// jquery do Sass
require('bootstrap-sass');

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

const Index = () => (
  <Router>
    <div>
      <Route exact path="/" component={PublicAuthentication}/>
    </div>
  </Router>
)

ReactDOM.render(<Index />, document.getElementById('app'));