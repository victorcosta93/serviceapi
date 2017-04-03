// Imports
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

// Componentes
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';

const PublicAuthentication = () => (
  <Router>
    <div className="container-fluid">
        <div className="row">
          <Route exact path="/" component={SignInForm}/>
          <Route exact path="/signup" component={SignUpForm}/>
          <Route exact path="/signin" component={SignInForm}/>
        </div>
    </div>
  </Router>
)

export default PublicAuthentication;