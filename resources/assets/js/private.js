// Imports
import React from 'react'
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

// Componentes do template
import MainHeader from './template/private/MainHeader';
import MainNav from './template/private/MainNav';
import MainFooter from './template/private/MainFooter';

// Lista de apps
import AppSystem from './apps/system/system';
import AppFinance from './apps/finance/finance';

export default class PrivateIndex extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {      
    return (
    <Router>
        <section>
            <MainHeader />
            <MainNav />
            <main className="main-global">
                <Route path="/finance" component={AppFinance} />
                <Route component={AppSystem} />
            </main>
            <MainFooter />
        </section>
    </Router>
    )
  }
}


ReactDOM.render(<PrivateIndex />, document.getElementById('private-app'));