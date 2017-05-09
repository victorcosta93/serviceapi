// Imports
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

// Componentes
import DashBoard from '../components/DashBoard';
//import ProfileAdm from '../components/ProfileAdm';

import MainHeader from '../components/MainHeader';
import MainNav from '../components/MainNav';
import MainFooter from '../components/MainFooter';

// Finance
import FinanceNew from '../components/finance/new';
import FinanceDel from '../components/finance/del';
import FinanceEdit from '../components/finance/edit';
import FinanceList from '../components/finance/list';
import FinanceTransfer from '../components/finance/transfer';

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
            <main className="main-global">
                
                <Link to="/finance">Listagem</Link><br/>
                <Link to="/finance/new">_new</Link><br/>
                <Link to="/finance/edit">edit</Link><br/>
                <Link to="/finance/del">del</Link><br/>
                <Link to="/finance/transfer">transfer</Link><br/>
                
                <Route exact path="/finance" component={FinanceList} />
                <Route exact path="/finance/new" component={FinanceNew} />
                <Route exact path="/finance/edit" component={FinanceEdit} />
                <Route exact path="/finance/del" component={FinanceDel} />
                <Route exact path="/finance/transfer" component={FinanceTransfer} />
                
            </main>
            <MainFooter />
        </section>
    </Router>
    )
  }
}

export default PrivateIndex;