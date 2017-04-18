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

class PrivateIndex extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {  
    return (
    <Router>
        <section>
            <header className="main-header">
                <ul>
                    <li className="left"><img className="logo" src="img/logo-90.png" /></li>
                    <li><Link to="about.asp">About</Link></li>
                    <li><Link to="/exit">Sair</Link></li>
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
                
            </main>
            <footer className="main-footer"></footer>
        </section>
    </Router>
    )
  }
}

export default PrivateIndex;