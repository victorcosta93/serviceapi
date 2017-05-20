// Imports
import React from 'react'

export default class FinanceBalance extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {    
    return (
    <div className="page-finance-goals">
    
      <table className="table table-striped table-condesend table-bordered goals-table">
        <thead>
            <tr>
                <th className="header1">Conta</th>
                <th className="header2">Anterior</th>
                <th className="header2">Atual</th>
                <th className="header2">Saldo</th>
            </tr>
        </thead>
        
        <tbody>
            {[...Array(10)].map((x, i) =>
            <tr className={"transation-"+i}>
                <td className="line1 no-mobile">Conta corrente</td>
                <td className="line3">R$ 250.500,11</td>
                <td className="line3">R$ 250.500,11</td>
                <td className="line3">R$ 250.500,11</td>
            </tr>
            )}
        </tbody>
        
        <tfoot>
            <tr>
                <th className="header1">Saldo liquido</th>
                <th className="header2">R$ 250.500,11</th>
                <th className="header2">R$ 250.500,11</th>
                <th className="header2">R$ 250.500,11</th>
            </tr>
        </tfoot>
      
      </table>
      
      
    </div>
    )
  }
}