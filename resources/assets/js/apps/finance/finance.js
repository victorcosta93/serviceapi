// Imports
import React from 'react'
import ReactDOM from 'react-dom';
import {
    Route,
    Link
} from 'react-router-dom'

// Pages
import FinanceNew from './new';
import FinanceDel from './del';
import FinanceEdit from './edit';
import FinanceList from './list';
import FinanceTransfer from './transfer';

// App
import AppSystem from '../../components/app';

export default class AppFinance extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {      
    return (
    <div className="finance-global">
    
        <Route exact path="/finance" render={() => (
            <AppSystem name={"Movimentações"}>
                <FinanceList />
            </AppSystem>
        )} />
        
        <Route exact path="/finance/new" render={() => (
            <AppSystem name={"Nova movimentação"}>
                <FinanceNew />
            </AppSystem>
        )} />
        
        <Route exact path="/finance/edit" render={() => (
            <AppSystem name={"Editar uma movimentação"}>
                <FinanceEdit />
            </AppSystem>
        )} />
        
        <Route exact path="/finance/del" render={() => (
            <AppSystem name={"Excluir uma movimentação"}>
                <FinanceDel />
            </AppSystem>
        )} />
        
        <Route exact path="/finance/transfer" render={() => (
            <AppSystem name={"Transferir entre contas"}>
                <FinanceTransfer />
            </AppSystem>
        )} />
    
    </div>
    )
  }
}