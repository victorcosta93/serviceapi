// Imports
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

// Componentes
//import DashBoard from '../components/DashBoard';
//import ProfileAdm from '../components/ProfileAdm';

const openProfileMenu = (e, elm) => {
    e.preventDefault();
    alert(elm);
}

class PrivateIndex extends React.Component {
  
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
    this.setState(prevState => ({
      isToggleOpen: false
    }));
  }
  
  render() {  
    return (
    <Router>
        <section>
            <header className="main-header">
                <img className="logo" src="img/logo-90.png" />
                <ul className="profile-menu">
                    <li><Link to="#noOpen" onClick={this.handleToggle}>
                            <img src="/img/profile.jpg" className="img-circle profile" />
                            Bruno Alves
                        </Link>
                        <ul className={(this.state.isToggleOpen ? 'profile-sub-show' : 'profile-sub-hidden')}>
                            <li><Link to="about.asp">About</Link></li>
                            <li><a href="/signin">Sair</a></li>
                        </ul>
                    </li>
                </ul>
            </header>
            <nav className="main-nav" onClick={this.handleClose}>
                <ul>
                    <li><Link to="/profile">Perfil</Link></li>
                    <li><Link to="/finance">Finanças</Link></li>
                    <li><Link to="/user">Usuários</Link></li>
                    <li><Link to="/remenber">Lembrete</Link></li>
                </ul>
            </nav>
            <main className="main-global" onClick={this.handleClose}>
                <h1>Teste</h1>
            </main>
            <footer className="main-footer"></footer>
        </section>
    </Router>
    )
  }
}

export default PrivateIndex;