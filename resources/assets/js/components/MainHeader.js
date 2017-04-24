// Imports
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class MainHeader extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {isToggleOpen: false};

    // This binding is necessary to make `this` work in the callback
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  
   handleToggle() {
    this.setState(prevState => ({
      isToggleOpen: !prevState.isToggleOpen
    }));
  }
   
   handleClose() {
       alert('om');
    this.setState(prevState => ({
      isToggleOpen: false
    }));
  }
  
  render() {  
    return (
    <header className="main-header">
        <img className="logo" src="img/logo-90.png" />
        <ul className="profile-menu">
            <li><Link to="#noOpen" onClick={this.handleToggle}>
                    <img src="/img/profile.jpg" className="img-circle profile" />
                    Bruno Alves
                </Link>
                <ul className={(this.state.isToggleOpen ? 'profile-sub-show' : 'profile-sub-hidden')}>
                    <li><Link to="about.asp">Meus dados</Link></li>
                    <li><a href="/signin">Sair</a></li>
                </ul>
            </li>
        </ul>
    </header>
    )
  }
}