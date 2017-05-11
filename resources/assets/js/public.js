// Imports
import React from 'react'
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

// Template
import SignUpForm from './apps/system/SignUpForm';
import SignInForm from './apps/system/SignInForm';

// Body Public
const Index = () => (
  <Router>
    <div className="container-fluid">
      <div className="row">
          <div className="global col-md-4 col-md-offset-4">
              <img className="logo" src="img/logo-90.png" />
              <Route exact path="/" component={SignInForm} />
              <Route exact path="/signup" component={SignUpForm} />
              <Route exact path="/signin" component={SignInForm} />
          </div>
      </div>
    </div>
  </Router>
)

ReactDOM.render(<Index />, document.getElementById('public-app'));