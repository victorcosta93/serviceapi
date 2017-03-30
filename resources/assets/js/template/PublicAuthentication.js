// Imports
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

// Componentes
import AuthenticationForm from '../components/AuthenticationForm';

const PublicAuthentication = () => (
  <Router>
    <div>
      <Route exact path="/" component={AuthenticationForm}/>
      <Route exact path="/signin" component={AuthenticationForm}/>
    </div>
  </Router>
)

export default PublicAuthentication;