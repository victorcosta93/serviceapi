// Imports
import React from 'react'
import ReactDOM from 'react-dom';
import {
    Route,
    Link
} from 'react-router-dom'

// Pages
import FinanceNew from './new';
import FinanceList from './list';
import FinanceGraficos from './graficos';
import FinanceBalance from './balance';
import FinanceGoals from './goals';
import FinanceCategory from './category';
import FinanceAccount from './account';

// App
import AppSystem from '../../components/app';

export default class AppFinance extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    
    let menuFinance = [
        {
            name: 'Movimentações',
            icon: 'glyphicon glyphicon-transfer',
            url: '/finance'
        },
        {
            name: 'Gráficos',
            icon: 'glyphicon glyphicon-object-align-bottom',
            url: '/finance/graph'
        },
        {
            name: 'Saldos',
            icon: 'glyphicon glyphicon-tasks',
            url: '/finance/balance'
        },
        {
            name: 'Metas',
            icon: 'glyphicon glyphicon-saved',
            url: '/finance/goals'
        },
        {
            name: 'Categorias',
            icon: 'glyphicon glyphicon-certificate',
            url: '/finance/category'
        },
        {
            name: 'Contas',
            icon: 'glyphicon glyphicon-credit-card',
            url: '/finance/account'
        }
        
    ];

  
    return (
    <div className="finance-global">
    
        <Route exact path="/finance" render={() => (
            <AppSystem name={"Movimentações"} menu={menuFinance}>
                <FinanceList />
            </AppSystem>
        )} />
        
        <Route exact path="/finance/graph" render={() => (
            <AppSystem name={"Gráficos"} menu={menuFinance}>
                <FinanceGraficos />
            </AppSystem>
        )} />
        
        <Route exact path="/finance/balance" render={() => (
            <AppSystem name={"Saldo"} menu={menuFinance}>
                <FinanceBalance />
            </AppSystem>
        )} />
        
        <Route exact path="/finance/goals" render={() => (
            <AppSystem name={"Gestão de metas"} menu={menuFinance}>
                <FinanceGoals />
            </AppSystem>
        )} />
        
        <Route exact path="/finance/category" render={() => (
            <AppSystem name={"Gestão de categorias"} menu={menuFinance}>
                <FinanceCategory />
            </AppSystem>
        )} />
        
        <Route exact path="/finance/account" render={() => (
            <AppSystem name={"Gestão de contas"} menu={menuFinance}>
                <FinanceAccount />
            </AppSystem>
        )} />
    
    </div>
    )
  }
}