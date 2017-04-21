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

import MainHeader from '../components/MainHeader';
import MainNav from '../components/MainNav';
import MainFooter from '../components/MainFooter';

class PrivateIndex extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {  
    return (
    <Router>
        <section>
            <MainHeader />
            <MainNav />
            <main className="main-global" onClick={() => MainHeader.handleClose}>
                <h1>Teste</h1>
            </main>
            <MainFooter />
        </section>
    </Router>
    )
  }
}

export default PrivateIndex;