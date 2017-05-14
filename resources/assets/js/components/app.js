// Imports
import React from 'react'
import {
    Route,
    Link
} from 'react-router-dom'

export default class AppSystem extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {    
    return (
    <div className="private-app">
    
        <nav className="private-appNav">
            <ul>
                <li><Link to="/finance"><i className="glyphicon glyphicon-transfer" />Movimentações</Link></li>
                <li><Link to="/finance/new"><i className="glyphicon glyphicon-credit-card" />Contas</Link></li>
                <li><Link to="/finance/edit"><i className="glyphicon glyphicon-certificate" />Categorias</Link></li>
                <li><Link to="/finance/del"><i className="glyphicon glyphicon-object-align-bottom" />Gráficos</Link></li>
                <li><Link to="/finance/transfer"><i className="glyphicon glyphicon-tasks" />Saldos</Link></li>
                <li><Link to="/finance/transfer"><i className="glyphicon glyphicon-saved" />Metas</Link></li>
            </ul>
        </nav>
        <div className="private-appBar">
            <h1>{this.props.name}</h1>
        </div>
        <div className="private-appBody">
            {this.props.children}
        </div>
        
    </div>
    )
  }
}