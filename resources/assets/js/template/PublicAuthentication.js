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

class PublicAuthentication extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {  
    return (
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
  }
}

export default PublicAuthentication;