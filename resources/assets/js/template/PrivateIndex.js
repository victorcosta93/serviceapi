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
    this.handleClick = this.handleClick.bind(this);
  }
  
   handleClick() {
    this.setState(prevState => ({
      isToggleOpen: !prevState.isToggleOpen
    }));
  }
  
  render() {  
    return (
    <Router>
        <section>
            <header className="main-header">
                <img className="logo" src="img/logo-90.png" />
                <ul className="profile-menu">
                    <li><Link to="#noOpen" onClick={this.handleClick}>
                            <img src="/img/profile.jpg" className="img-circle profile" />
                            Bruno Alves
                        </Link>
                        <ul className={(this.state.isToggleOpen ? 'profile-sub-show' : 'profile-sub-hidden')}>
                            <li><Link to="about.asp">About</Link></li>
                            <li><Link to="/exit">Sair</Link></li>
                        </ul>
                    </li>
                </ul>
            </header>
            <nav className="main-nav">
                <ul>
                    <li><Link to="/profile">Perfil</Link></li>
                    <li><Link to="/finance">Finanças</Link></li>
                    <li><Link to="/user">Usuários</Link></li>
                    <li><Link to="/remenber">Lembrete</Link></li>
                </ul>
            </nav>
            <main className="main-global">
                <h1>Teste</h1>
            </main>
            <footer className="main-footer"></footer>
        </section>
    </Router>
    )
  }
}

export default PrivateIndex;