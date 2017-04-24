// Imports
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class MainNav extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {  
    return (
    <nav className="main-nav" onClick={this.handleClose}>
        <ul>
            <li>
                <Link to="/profile">
                    <i className="glyphicon glyphicon-dashboard"></i>
                    <span>Perfil</span>
                </Link>
            </li>
            <li>
                <Link to="/finance">
                    <i className="glyphicon glyphicon-dashboard"></i>
                    <span>Finanças</span>
                </Link>
            </li>
            <li>
                <Link to="/user">
                    <i className="glyphicon glyphicon-dashboard"></i>
                    <span>Usuários</span>
                </Link>
            </li>
            <li>
                <Link to="/remenber">
                    <i className="glyphicon glyphicon-dashboard"></i>
                    <span>Lembrete</span>
                </Link>
            </li>
        </ul>
    </nav>
    )
  }
}